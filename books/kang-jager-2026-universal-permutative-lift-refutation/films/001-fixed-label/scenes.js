/* 同一底空间的固定标签。所有画面由共享引擎按旁白确定性绘制。 */
'use strict';
function heading(en, zh) {
  txt(en, 960, 225, {size: 48, fam: F.disp, w: 700, align: 'center', c: C.white});
  txt(zh, 960, 278, {size: 30, fam: F.zh, align: 'center', c: C.cyan});
}
function formula(s, x, y, size=45, a=1) {
  txt(s, x, y, {size, fam:F.math, align:'center', c:C.white, a});
}
function bits(s,x,y,w=90,a=1,marks=[]) {
  for(let i=0;i<s.length;i++) {
    const col=marks.includes(i)?C.mag:C.cyan;
    chip(x+i*w,y,w-8,70,s[i],col,a,32,F.mono);
  }
}
function rail(x,y,w,label,a=1) {
  panel(x,y,w,70,a,C.cyan);
  txt(label,x+35,y+48,{size:28,fam:F.math,c:C.white,a});
  arrow(x+190,y+35,x+w-35,y+35,C.cyan,a,3);
}
SCENES.question = S => {
  heading('TWO INPUTS: ONE DYNAMICAL QUESTION','两个输入，是否属于同一个世界？');
  badgeQ(S, [[0, 'output', 'computed'], [2, 'one base', 'argued']]);
  panel(170,340,1580,440,1,C.cyan,'ADJACENT XOR');
  formula('yᵢ = xᵢ + xᵢ₊₁  (mod 2)',960,420);
  txt('OUTPUT',250,510,{size:24,fam:F.mono,c:C.dim});bits('1011',680,500,110);
  txt('x₀ = 0',260,610,{size:30,fam:F.math,c:C.white});bits('01101',625,600,110,at(S,0,.7));
  txt('x₀ = 1',260,710,{size:30,fam:F.math,c:C.white});bits('10010',625,700,110,at(S,1,.7));
  txt('Shifting may change x₀. We need a different label.',960,815,{size:30,fam:F.disp,align:'center',c:C.white,a:at(S,1,.7)});
};
SCENES.blocks = S => {
  heading('THE BOUNDARIES REMAIN VISIBLE','边界始终可以识别');
  badgeQ(S, [[0, 'boundary', 'argued']]);
  panel(150,330,760,450,1,C.cyan,'LEVEL ONE');
  txt('U₁',230,450,{size:36,fam:F.math,c:C.white});bits('001',410,440,110);
  txt('V₁',230,570,{size:36,fam:F.math,c:C.white});bits('011',410,560,110,1);
  bits('001011',255,690,94,at(S,0,.6));
  line(533,635,533,745,C.mag,at(S,0,.6),4);
  panel(960,330,810,450,1,C.cyan,'EVERY LEVEL n ≥ 0');
  formula('m = (n+1)!',1365,430,40,at(S,1,.7));
  formula('Uₙ₊₁ = Uₙ²ᵐ Vₙᵐ',1365,535,44,at(S,1,.7));
  formula('Vₙ₊₁ = Uₙᵐ Vₙ²ᵐ',1365,630,44,at(S,1,.7));
  txt('10 marks the parent start',1365,724,{size:30,fam:F.disp,c:C.cyan,align:'center',a:at(S,2,.6)});
  txt('A positive period p would require every Hₙ to divide p.',960,815,{size:30,fam:F.disp,c:C.white,align:'center',a:at(S,2,.7)});
};
SCENES.columns = S => {
  heading('ALMOST EVERY COLUMN AGREES','差异比例不断缩小');
  badgeQ(S, [[0, 'disagreement fraction', 'argued']]);
  panel(150,330,800,440,1,C.cyan,'LEVEL ONE');
  bits('001',420,450,125,1,[1]);bits('011',420,570,125,1,[1]);
  formula('1 disagreement / 3 columns',550,700,30);
  panel(1000,330,770,440,1,C.cyan,'LEVEL n');
  formula('|Dₙ| / Hₙ = 3⁻ⁿ',1385,450,48);
  const levels=[1,2,3];
  levels.forEach((n,i)=>{
    const y=520+i*65;txt('n = '+n,1040,y+20,{size:24,fam:F.mono,c:C.white});
    box(1160,y,510,26,C.cyan,1);fillBox(1160,y,510/Math.pow(3,n),26,C.mag,1);
  });
  formula('|μ(C) − ν(C)| ≤ r · 3⁻ⁿ → 0',960,815,42,at(S,2,.7));
};
SCENES.factorial = S => {
  heading('FACTORIALS CANCEL FINITE ACTIONS','阶乘分别消去每个排列因子');
  badgeQ(S, [[0, 'memory states', 'argued']]);
  panel(170,340,700,450,1,C.cyan,'A THREE-STATE EXAMPLE');
  const x=520,y=545,r=110;
  for(let i=0;i<3;i++) {
    const a=-Math.PI/2+i*2*Math.PI/3,b=-Math.PI/2+((i+1)%3)*2*Math.PI/3;
    arrow(x+Math.cos(a)*r,y+Math.sin(a)*r,x+Math.cos(b)*r,y+Math.sin(b)*r,C.cyan,1,3);
    chip(x+Math.cos(a)*r,y+Math.sin(a)*r,70,60,String(i),C.cyan,1,28);
  }
  const q=Math.floor(S.u*0.6)%3;
  dot(x+Math.cos(-Math.PI/2+q*2*Math.PI/3)*r,y+Math.sin(-Math.PI/2+q*2*Math.PI/3)*r,13,'c');
  formula('π³ = id  ⇒  π⁶ = id',520,735,34);
  panel(930,340,820,450,1,C.cyan,'GENERAL ARGUMENT');
  formula('order(π) divides d!',1340,450,40,at(S,1,.7));
  formula('n ≥ max{1,d}',1340,520,36,at(S,1,.7));
  formula('A=P(Uₙ₋₁), B=P(Vₙ₋₁)',1340,575,27,at(S,1,.7));
  formula('P(Uₙ) = B^(n!) A^(2n!) = id',1340,620,36,at(S,2,.7));
  formula('P(Vₙ) = B^(2n!) A^(n!) = id',1340,710,36,at(S,2,.7));
  txt('A and B need not commute.',960,815,{size:32,fam:F.disp,c:C.white,align:'center',a:at(S,2,.7)});
};
SCENES.label = S => {
  heading('THE NEW LABEL NEVER CHANGES','新标签永远不变');
  badgeQ(S, [[0, 'accumulated permutation', 'argued']]);
  panel(170,340,1580,440,1,C.cyan,'CONTINUOUS RELABELING');
  formula('old state: q        accumulated action: c(y)',960,435,38);
  formula('new label: c(y)⁻¹ q',960,530,54,at(S,0,.7));
  formula('(π c)⁻¹ (π q) = c⁻¹ q',960,635,54,at(S,1,.7));
  formula('tile boundary: P(tile) = id',960,730,42,at(S,2,.7));
  txt('Inside: cancellation.  At a boundary: a consistent reset.',960,815,{size:30,fam:F.disp,c:C.white,align:'center',a:at(S,2,.7)});
};
SCENES.copies = S => {
  heading('SEPARATE COPIES OF THE SAME BASE','同一底空间的分离副本');
  badgeQ(S, [[0, 'exactly', 'argued']]);
  formula('length ℓ:  2^(ℓ−1) fixed labels',960,355,43);
  for(let i=0;i<4;i++) {
    rail(235,400+i*82,1450,'q = '+['00','01','10','11'][i]);
    const pos=510+((S.u*38+i*175)%1020);
    dot(pos,435+i*82,12,'c');
  }
  txt('ℓ = 3: four copies; arrows stay on their own rail',960,765,{size:29,fam:F.disp,c:C.white,align:'center'});
  formula('ρ = Σ t_q μ_q,   t_q ≥ 0,   Σ t_q = 1',960,815,33,at(S,1,.7));
};
FILM.poster = () => {
  fillBox(0,0,W,H,C.bg,1);
  txt('ONE BASE. EVERY LIFT SPLITS.',960,270,{size:62,fam:F.disp,w:700,align:'center',c:C.white});
  txt('永不改变的标签',960,355,{size:52,fam:F.zh,align:'center',c:C.cyan});
  for(let i=0;i<4;i++) rail(270,440+i*90,1380,['00','01','10','11'][i]);
  formula('η⁻¹(Y) ≅ Y × {0,1}^(ℓ−1)',960,875,44);
  txt('Haobo Ma · Wenlin Zhang',960,965,{size:27,fam:F.disp,align:'center',c:C.dim});
};
