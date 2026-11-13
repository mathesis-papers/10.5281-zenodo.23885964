"""Bounded exact controls for the factorial Toeplitz construction; Python 3.10+."""

from fractions import Fraction
from itertools import permutations, product
import json
from math import factorial


def compose(after, before):
    return tuple(after[value] for value in before)


def power(permutation, exponent):
    result = tuple(range(len(permutation)))
    factor = permutation
    while exponent:
        if exponent % 2:
            result = compose(factor, result)
        factor = compose(factor, factor)
        exponent //= 2
    return result


def holonomy(word, actions):
    result = tuple(range(len(actions[0])))
    for symbol in word:
        result = compose(actions[symbol], result)
    return result


def word_levels(last):
    levels = [(bytes([0]), bytes([1]))]
    for level in range(1, last + 1):
        copies = factorial(level)
        previous_zero, previous_one = levels[-1]
        levels.append((previous_zero * (2 * copies) + previous_one * copies,
                       previous_zero * copies + previous_one * (2 * copies)))
    return levels


def run():
    levels = word_levels(4)
    table = []
    for level, (zero, one) in enumerate(levels):
        assert len(zero) == len(one)
        mismatch = sum(left != right for left, right in zip(zero, one))
        assert Fraction(mismatch, len(zero)) == Fraction(1, 3 ** level)
        assert zero.count(0) - one.count(0) == mismatch
        table.append({'level': level, 'height': len(zero), 'disagreements': mismatch,
                      'fraction': str(Fraction(mismatch, len(zero)))})
        if level:
            previous_zero, previous_one = levels[level - 1]
            copies = factorial(level)
            assert zero.startswith(previous_zero * copies)
            assert one.startswith(previous_zero * copies)
            assert zero.endswith(previous_one * copies)
            assert one.endswith(previous_one * copies)
    pair_controls = 0
    for level in (1, 2):
        for left, right, parent in product((0, 1), repeat=3):
            assert levels[level][left] + levels[level][right] in levels[level + 2][parent]
            pair_controls += 1
    boundary_controls = 0
    for level in range(1, 5):
        copies = factorial(level)
        parent_labels = (bytes([0]) * (2 * copies) + bytes([1]) * copies,
                         bytes([0]) * copies + bytes([1]) * (2 * copies))
        height = 3 * copies
        for types in product((0, 1), repeat=4):
            labels = b''.join(parent_labels[parent] for parent in types)
            for offset in range(len(labels)):
                assert (labels[offset - 1] == 1 and labels[offset] == 0) == (offset % height == 0)
                boundary_controls += 1
    permutation_pairs = 0
    noncommuting_pairs = 0
    direct_holonomies = 0
    for degree in range(1, 5):
        identity = tuple(range(degree))
        for actions in product(permutations(range(degree)), repeat=2):
            zero_action, one_action = actions
            permutation_pairs += 1
            noncommuting_pairs += compose(zero_action, one_action) != compose(one_action, zero_action)
            for level in range(1, degree + 1):
                copies = factorial(level)
                next_zero = compose(power(one_action, copies), power(zero_action, 2 * copies))
                next_one = compose(power(one_action, 2 * copies), power(zero_action, copies))
                zero_action, one_action = next_zero, next_one
                if level <= 3:
                    assert holonomy(levels[level][0], actions) == zero_action
                    assert holonomy(levels[level][1], actions) == one_action
                    direct_holonomies += 2
            assert zero_action == identity and one_action == identity
    code_counts = {}
    code_checks = 0
    transfer_edges = 0
    for length in range(2, 6):
        states = list(product((0, 1), repeat=length - 1))
        state_index = {state: index for index, state in enumerate(states)}
        interiors = list(product((0, 1), repeat=length - 2))
        counts = 0
        for values in product((0, 1), repeat=len(interiors)):
            local_values = dict(zip(interiors, values))
            actions = []
            for output in (0, 1):
                action = []
                for state in states:
                    last = output ^ state[0] ^ local_values[state[1:]]
                    new_state = state[1:] + (last,)
                    assert state[0] ^ last ^ local_values[state[1:]] == output
                    action.append(state_index[new_state])
                    code_checks += 1
                assert sorted(action) == list(range(len(states)))
                actions.append(tuple(action))
            zero_action, one_action = actions
            for level in range(1, len(states) + 1):
                copies = factorial(level)
                zero_action, one_action = (
                    compose(power(one_action, copies), power(zero_action, 2 * copies)),
                    compose(power(one_action, 2 * copies), power(zero_action, copies)))
            assert zero_action == one_action == tuple(range(len(states)))
            if length <= 3:
                for word in levels[len(states)]:
                    prefix = tuple(range(len(states)))
                    for symbol in word:
                        next_prefix = compose(actions[symbol], prefix)
                        for state in range(len(states)):
                            assert next_prefix.index(actions[symbol][state]) == prefix.index(state)
                            transfer_edges += 1
                        prefix = next_prefix
                    assert prefix == tuple(range(len(states)))
            counts += 1
        assert counts == 2 ** (2 ** (length - 2))
        code_counts[str(length)] = counts
    return {'status': 'pass', 'arithmetic': 'exact integers and rational numbers',
            'word_levels': table, 'ordered_pair_occurrence_controls': pair_controls,
            'parent_boundary_coordinate_controls': boundary_controls,
            'permutation_pairs_degrees_1_to_4': permutation_pairs,
            'noncommuting_permutation_pairs': noncommuting_pairs,
            'direct_word_holonomy_checks': direct_holonomies,
            'all_binary_bipermutative_rules_by_length': code_counts,
            'prefix_transition_checks': code_checks, 'trivialization_edge_checks': transfer_edges,
            'scope': 'Finite controls only. The all-length and all-level assertions are proved in note.tex.'}


if __name__ == '__main__':
    print(json.dumps(run(), indent=2, sort_keys=True))
