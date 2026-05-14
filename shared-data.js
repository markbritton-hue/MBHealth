// ─── DATA ─────────────────────────────────────────────────────────────────────
const D = {
  wbc:  { label:'WBC',            unit:'X10⁹/L',  dates:['Aug 2014','Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'], values:[15.5,10.2,5.8,7.5,7.2,7.3,6.5,7.2,9.3,9.0,6.7],                  lo:4.0,   hi:11.0  },
  rbc:  { label:'RBC',            unit:'x10¹²/L', dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[5.5,5.5,5.3,5.5,5.6,5.7,5.5,5.3,5.1,5.5],           lo:4.40,  hi:6.00  },
  hgb:  { label:'HGB',            unit:'GM/DL',   dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[15.7,15.7,15.4,15.4,16.0,16.1,15.2,15.3,15.1,15.3],  lo:13.5,  hi:17.5  },
  hct:  { label:'HCT',            unit:'%',       dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[44.7,44.7,44.9,45.1,48.4,46.5,44.2,47.2,43.4,47.3],  lo:41.0,  hi:51.0  },
  mcv:  { label:'MCV',            unit:'FL',      dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[81,82,84,83,85,84,82,87,85,86],                       lo:80.0,  hi:99.0  },
  mch:  { label:'MCH',            unit:'PG/CELL', dates:['Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],                     values:[28.5,28.5,29,28.5,28.5,29.2,28.3,29.3,27.8],          lo:25.0,  hi:35.0  },
  mchc: { label:'MCHC',           unit:'G/DL',    dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[35,34.8,34.4,34.5,33.3,34.5,34.5,32.5,34.3,32.2],     lo:32.0,  hi:36.0  },
  rdw:  { label:'RDW',            unit:'%',       dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[12.8,12.7,12.5,12.4,12.6,12.6,13.2,13.0,12.4,13.0],  lo:null,  hi:15.0  },
  plt:  { label:'Platelet Count', unit:'X10⁹/L',  dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[185,190,207,265,200,205,205,215,198,200],              lo:140,   hi:440   },
  mpv:  { label:'MPV',            unit:'FL',      dates:['Jul 2017','Jun 2020','May 2021','Nov 2021','May 2022','May 2023','Jan 2024','Oct 2024','Mar 2025','Apr 2026'],           values:[11.0,11.0,11.3,10.6,11.4,11.7,11.7,11.6,10.7,11.0],  lo:9.0,   hi:12.2  },

  glucose:    { label:'Glucose',             unit:'mg/dL',  dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[141,158,153,162,123,152,165,135,119,144],              lo:70,    hi:99    },
  bun:        { label:'BUN',                 unit:'mg/dL',  dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[18,20,23,24,20,17,21,25,20,26],                        lo:6,     hi:20    },
  creatinine: { label:'Creatinine',          unit:'mg/dL',  dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[1.21,1.04,1.04,0.98,1.05,1.09,0.92,0.93,0.77,1.04],   lo:0.70,  hi:1.30  },
  buncr:      { label:'BUN/Creatinine Ratio',unit:'ratio',  dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[15,20,22,24,19,15,23,27,26,26],                        lo:6,     hi:20    },
  egfr:       { label:'eGFR',                unit:'mL/min', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[68,88,88,87,86,85,84,84,85,85],                        lo:60,    hi:null  },
  sodium:     { label:'Sodium',              unit:'mmol/L', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[141,144,141,142,141,144,143,142,142,142],               lo:135,   hi:145   },
  potassium:  { label:'Potassium',           unit:'mmol/L', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[4.1,3.9,4.3,4.2,3.7,3.7,4.1,3.5,3.5,3.8],             lo:3.5,   hi:5.3   },
  cl:         { label:'Chloride (CL)',       unit:'mmol/L', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[101,103,101,101,104,101,101,102,102,103],               lo:98,    hi:108   },
  co2:        { label:'CO2',                 unit:'mmol/L', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[29,28,29,27,29,29,29,30,29,29],                        lo:23,    hi:32    },
  anion:      { label:'Anion Gap',           unit:'mmol/L', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Nov 2023','Dec 2024','Feb 2025','Apr 2026'], values:[11,14,11,12,14,12,11,11,11,10],                        lo:7,     hi:16    },

  a1c:     { label:'HgbA1C',          unit:'%',     dates:['Feb 2022','Aug 2022','Nov 2022','Mar 2024','Apr 2024','Jun 2024','Apr 2025','Oct 2025','Apr 2026'], values:[6.5,6.5,6.8,6.3,6.8,6.0,6.2,6.1,6.1], lo:4.4, hi:5.6  },
  eavgglc: { label:'Est Avg Glucose', unit:'mg/dL', dates:['Feb 2022','Aug 2022','Nov 2022','Mar 2024','Apr 2024','Jun 2024','Apr 2025','Oct 2025','Apr 2026'], values:[140,140,151,134,151,122,134,128,128],   lo:null,hi:null },

  chol:    { label:'Total Cholesterol',       unit:'mg/dL', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Apr 2026'], values:[193,206,229,178,211,237,219],      lo:null, hi:200  },
  trig:    { label:'Triglycerides',           unit:'mg/dL', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Dec 2023','Apr 2026'], values:[103,197,277,114,116,121,122,97], lo:null, hi:150  },
  hdl:     { label:'HDL',                     unit:'mg/dL', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Apr 2026'], values:[45,41,42,44,42,47,51],             lo:39,   hi:null },
  ldl:     { label:'LDL Calculated',          unit:'mg/dL', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Apr 2026'], values:[127,130,139,112,147,165,149],      lo:null, hi:100  },
  nonhdl:  { label:'Non-HDL Chol (LDL+VLDL)',unit:'mg/dL', dates:['May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Apr 2026'],            values:[185,134,171,186,167,167],          lo:null, hi:130  },
  cholhdl: { label:'Chol/HDL Ratio',          unit:'ratio', dates:['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Apr 2026'], values:[4.3,5.0,5.5,4.0,5.0,5.0,4.3],    lo:null, hi:5.0  },

  albuminurine:    { label:'Albumin, Urine Random',    unit:'mg/dL', dates:['Jun 2023','Mar 2024','Nov 2024','Jan 2025','Apr 2026'], values:[1.2,0.9,1.4,1.3,1.3],  lo:null, hi:null },
  creatinineurine: { label:'Creatinine, Urine Random', unit:'mg/dL', dates:['Jun 2023','Mar 2024','Nov 2024','Jan 2025'],           values:[230,265,147,207],        lo:null, hi:null },
  acr:             { label:'Albumin/Creatinine Ratio', unit:'mg/g',  dates:['Jun 2023','Mar 2024','Nov 2024','Jan 2025'],           values:[5,3,10,6],               lo:null, hi:30   },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const CLR = { normal:'#22d47a', high:'#f05252', low:'#f5a623' };

function status(val, d) {
  if (d.lo !== null && val < d.lo) return 'low';
  if (d.hi !== null && val > d.hi) return 'high';
  return 'normal';
}
function ptColor(val, d) { return CLR[status(val, d)]; }

function rangeLabel(d) {
  if (d.lo !== null && d.hi !== null) return `Normal: ${d.lo} – ${d.hi} ${d.unit !== 'ratio' ? d.unit : ''}`;
  if (d.lo !== null)  return `Normal: >${d.lo} ${d.unit !== 'ratio' ? d.unit : ''}`;
  if (d.hi !== null)  return `Normal: <${d.hi} ${d.unit !== 'ratio' ? d.unit : ''}`;
  return 'Reference range not established';
}

function makeBandPlugin(d) {
  if (d.lo === null && d.hi === null) return null;
  return {
    beforeDatasetsDraw(chart) {
      const { ctx, chartArea, scales: { y } } = chart;
      if (!y || !chartArea) return;
      const { top, bottom, left, right } = chartArea;
      ctx.save();
      const yTop = d.hi !== null ? Math.max(y.getPixelForValue(d.hi), top)    : top;
      const yBot = d.lo !== null ? Math.min(y.getPixelForValue(d.lo), bottom) : bottom;
      ctx.fillStyle = 'rgba(34,212,122,0.07)';
      ctx.fillRect(left, yTop, right - left, yBot - yTop);
      ctx.strokeStyle = 'rgba(34,212,122,0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      if (d.hi !== null) {
        const py = y.getPixelForValue(d.hi);
        if (py >= top && py <= bottom) { ctx.beginPath(); ctx.moveTo(left, py); ctx.lineTo(right, py); ctx.stroke(); }
      }
      if (d.lo !== null) {
        const py = y.getPixelForValue(d.lo);
        if (py >= top && py <= bottom) { ctx.beginPath(); ctx.moveTo(left, py); ctx.lineTo(right, py); ctx.stroke(); }
      }
      ctx.restore();
    }
  };
}

function buildCard(parentEl, key) {
  const d = D[key];
  if (!d) return;

  const last     = d.values[d.values.length - 1];
  const prev     = d.values[d.values.length - 2];
  const lastSt   = status(last, d);
  const lastClr  = CLR[lastSt];
  const badgeCls = lastSt === 'normal' ? 'n' : lastSt === 'high' ? 'h' : 'w';
  const badgeTxt = lastSt === 'normal' ? 'Normal' : lastSt === 'high' ? '▲ High' : '▼ Low';

  let trendHtml = '';
  if (prev != null) {
    const pct = ((last - prev) / Math.abs(prev) * 100);
    const dir = pct > 0 ? '↑' : '↓';
    const clr = lastSt === 'normal'
      ? (pct < 0 ? '#22d47a' : '#4f8ef7')
      : (pct > 0 ? '#f05252' : '#22d47a');
    trendHtml = `<div class="cc-trend" style="color:${clr}">${dir} ${Math.abs(pct).toFixed(1)}% from prev</div>`;
  }

  const canvasId = `ch-${key}`;
  const card = document.createElement('div');
  card.className = 'cchart';
  card.innerHTML = `
    <div class="cc-head">
      <div>
        <div class="cc-title">${d.label}</div>
        <div class="cc-sub">${d.dates.length} readings · ${d.dates[0]} – ${d.dates[d.dates.length-1]}</div>
      </div>
      <div class="cc-latest">
        <div class="cc-val" style="color:${lastClr}">${last}</div>
        <div class="cc-date">${d.dates[d.dates.length-1]} · ${d.unit}</div>
        <div style="margin-top:5px"><span class="badge ${badgeCls}">${badgeTxt}</span></div>
      </div>
    </div>
    <div class="cc-body"><div class="cc-wrap"><canvas id="${canvasId}"></canvas></div></div>
    <div class="cc-foot">
      <div class="cc-range">${rangeLabel(d)}</div>
      ${trendHtml}
    </div>`;
  parentEl.appendChild(card);

  const ptColors = d.values.map(v => ptColor(v, d));
  const band = makeBandPlugin(d);

  new Chart(document.getElementById(canvasId), {
    type: 'line',
    plugins: band ? [band] : [],
    data: {
      labels: d.dates,
      datasets: [{
        data: d.values,
        borderColor: '#4f8ef7',
        borderWidth: 2,
        pointBackgroundColor: ptColors,
        pointBorderColor: ptColors,
        pointBorderWidth: 0,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1a2540',
          borderColor: 'rgba(99,140,210,0.3)',
          borderWidth: 1,
          padding: 12,
          titleFont: { family: "'Syne', sans-serif", size: 12, weight: '700' },
          bodyFont:  { family: "'DM Mono', monospace", size: 11 },
          callbacks: {
            label(ctx) {
              const v  = ctx.raw;
              const st = status(v, d);
              const s  = st === 'normal' ? '✓ Normal' : st === 'high' ? '▲ High' : '▼ Low';
              return `  ${v} ${d.unit}   ${s}`;
            }
          }
        }
      },
      scales: {
        x: { grid: { color:'rgba(99,140,210,0.06)' }, ticks: { maxRotation:35, font:{ size:9 } } },
        y: { grid: { color:'rgba(99,140,210,0.06)' }, ticks: { font:{ size:10 } } }
      }
    }
  });
}

// ─── KETO DATA & CHARTS ───────────────────────────────────────────────────────
const KETO_DATES = ['Jan 2021','May 2021','Nov 2021','May 2022','Aug 2022','Sep 2023','Apr 2026'];
const TRIG_VALS  = [103, 197, 277, 114, 116, 121, 97];
const HDL_VALS   = [45,  41,  42,  44,  42,  47,  51];
const LDL_VALS   = [127, 130, 139, 112, 147, 165, 149];
const CHOL_VALS  = [193, 206, 229, 178, 211, 237, 219];

const RATIO_TRIG_HDL  = TRIG_VALS.map((t,i) => +(t / HDL_VALS[i]).toFixed(2));
const RATIO_LDL_HDL   = LDL_VALS.map((l,i)  => +(l / HDL_VALS[i]).toFixed(2));
const RATIO_CHOL_HDL  = CHOL_VALS.map((c,i) => +(c / HDL_VALS[i]).toFixed(2));

function buildKetoRatioChart(parentEl, label, dates, values, thresholds) {
  const last = values[values.length - 1];
  const prev = values[values.length - 2];
  const pct  = +((last - prev) / Math.abs(prev) * 100).toFixed(1);
  const dir  = pct > 0 ? '↑' : '↓';

  const hi = thresholds.find(t => t.type === 'hi');
  let lastClr = '#22d47a';
  if (hi && last > hi.val) lastClr = '#f05252';
  else if (hi && last > hi.val * 0.85) lastClr = '#f5a623';

  const ptColors = values.map(v => {
    if (hi && v > hi.val) return '#f05252';
    if (hi && v > hi.val * 0.85) return '#f5a623';
    return '#22d47a';
  });

  const canvasId = `keto-chart-${label.replace(/\//g,'-').replace(/\s/g,'_')}`;
  const card = document.createElement('div');
  card.className = 'cchart';
  card.innerHTML = `
    <div class="cc-head">
      <div>
        <div class="cc-title">${label}</div>
        <div class="cc-sub">${dates.length} readings · ${dates[0]} – ${dates[dates.length-1]}</div>
      </div>
      <div class="cc-latest">
        <div class="cc-val" style="color:${lastClr}">${last}</div>
        <div class="cc-date">${dates[dates.length-1]}</div>
      </div>
    </div>
    <div class="cc-body"><div class="cc-wrap"><canvas id="${canvasId}"></canvas></div></div>
    <div class="cc-foot">
      <div class="cc-range">${thresholds.map(t=>`${t.label}: ${t.type==='hi'?'<':'>'} ${t.val}`).join(' &nbsp;·&nbsp; ')}</div>
      <div class="cc-trend" style="color:${pct<0?'#22d47a':'#f05252'}">${dir} ${Math.abs(pct)}% from prev</div>
    </div>`;
  parentEl.appendChild(card);

  const bandPlugin = {
    beforeDatasetsDraw(chart) {
      const { ctx, chartArea, scales: { y } } = chart;
      if (!y || !chartArea) return;
      const { top, bottom, left, right } = chartArea;
      ctx.save();
      if (hi) {
        const py = Math.max(y.getPixelForValue(hi.val), top);
        ctx.fillStyle = 'rgba(34,212,122,0.06)';
        ctx.fillRect(left, py, right-left, bottom-py);
        ctx.strokeStyle = 'rgba(34,212,122,0.25)';
        ctx.lineWidth = 1; ctx.setLineDash([4,4]);
        ctx.beginPath(); ctx.moveTo(left,py); ctx.lineTo(right,py); ctx.stroke();
      }
      ctx.restore();
    }
  };

  new Chart(document.getElementById(canvasId), {
    type: 'line',
    plugins: [bandPlugin],
    data: {
      labels: dates,
      datasets: [{
        data: values,
        borderColor: '#c084fc',
        borderWidth: 2,
        pointBackgroundColor: ptColors,
        pointBorderColor: ptColors,
        pointRadius: 5, pointHoverRadius: 7,
        tension: 0.3, fill: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode:'index', intersect:false },
      plugins: {
        legend: { display:false },
        tooltip: {
          backgroundColor:'#1a2540', borderColor:'rgba(192,132,252,0.3)', borderWidth:1, padding:12,
          titleFont:{ family:"'Syne',sans-serif", size:12, weight:'700' },
          bodyFont: { family:"'DM Mono',monospace", size:11 },
          callbacks: { label(ctx) { return `  ${ctx.raw}  ${hi && ctx.raw <= hi.val ? '✓ Good' : '▲ Above target'}`; } }
        }
      },
      scales: {
        x: { grid:{ color:'rgba(99,140,210,0.06)' }, ticks:{ maxRotation:35, font:{size:9} } },
        y: { grid:{ color:'rgba(99,140,210,0.06)' }, ticks:{ font:{size:10} } }
      }
    }
  });
}

function drawIRGauge() {
  const canvas = document.getElementById('ir-gauge');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 110, cy = 110, r = 85, lw = 16;
  const startA = Math.PI, endA = 2 * Math.PI;

  ctx.beginPath(); ctx.arc(cx, cy, r, startA, endA);
  ctx.strokeStyle = 'rgba(99,140,210,0.12)'; ctx.lineWidth = lw;
  ctx.lineCap = 'round'; ctx.stroke();

  const zones = [
    { from:0,   to:0.33, color:'rgba(34,212,122,0.8)' },
    { from:0.33,to:0.66, color:'rgba(245,166,35,0.8)' },
    { from:0.66,to:1,    color:'rgba(240,82,82,0.8)' },
  ];
  zones.forEach(z => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, startA + z.from*Math.PI, startA + z.to*Math.PI);
    ctx.strokeStyle = z.color; ctx.lineWidth = lw; ctx.lineCap = 'butt'; ctx.stroke();
  });

  const needleFrac = 0.78;
  const angle = startA + needleFrac * Math.PI;
  const nx = cx + (r-4) * Math.cos(angle);
  const ny = cy + (r-4) * Math.sin(angle);
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny);
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI*2);
  ctx.fillStyle = '#fff'; ctx.fill();

  ctx.font = "bold 9px 'DM Mono', monospace";
  ctx.fillStyle = '#22d47a'; ctx.textAlign = 'center';
  ctx.fillText('Optimal', cx - 72, cy + 18);
  ctx.fillStyle = '#f5a623';
  ctx.fillText('Warning', cx, cy + 28);
  ctx.fillStyle = '#f05252';
  ctx.fillText('IR', cx + 72, cy + 18);
}

function buildKetoTab() {
  drawIRGauge();
  const grid = document.getElementById('cg-keto-ratios');
  if (!grid) return;
  buildKetoRatioChart(grid, 'Triglyceride / HDL Ratio', KETO_DATES, RATIO_TRIG_HDL, [
    { type:'hi', val:1.5, label:'Bikman optimal' },
    { type:'hi', val:2.0, label:'Berry ideal' }
  ]);
  buildKetoRatioChart(grid, 'LDL / HDL Ratio', KETO_DATES, RATIO_LDL_HDL, [
    { type:'hi', val:2.0, label:'Berry optimal' },
    { type:'hi', val:3.5, label:'Concerning' }
  ]);
  buildKetoRatioChart(grid, 'Total Cholesterol / HDL Ratio', KETO_DATES, RATIO_CHOL_HDL, [
    { type:'hi', val:3.5, label:'Berry ideal' },
    { type:'hi', val:5.0, label:'High risk' }
  ]);
}

// ─── ECG CHARTS ───────────────────────────────────────────────────────────────
function buildECGCharts() {
  const pieCtx = document.getElementById('ecg-beats-pie');
  if (pieCtx && !pieCtx._built) {
    pieCtx._built = true;
    new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['Normal', 'SVE (PAC)', 'VE (PVC)', 'Other'],
        datasets: [{
          data: [1333518, 3117, 104, 671],
          backgroundColor: ['rgba(34,212,122,0.85)','rgba(245,166,35,0.85)','rgba(240,82,82,0.85)','rgba(77,100,136,0.85)'],
          borderColor: ['#22d47a','#f5a623','#f05252','#4d6488'],
          borderWidth: 2, hoverOffset: 6
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '68%',
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw.toLocaleString()} (${(ctx.raw/1337410*100).toFixed(2)}%)` } }
        }
      }
    });
  }

  const barCtx = document.getElementById('ecg-daily-chart');
  if (barCtx && !barCtx._built) {
    barCtx._built = true;
    const days = ['4/23','4/24','4/25','4/26','4/27','4/28','4/29','4/30','5/1','5/2','5/3','5/4','5/5','5/6'];
    const tachy = [7,7,16,1,2,0.5,0.5,15,0.5,1,2,0.5,0.5,3];
    const brady = [0,3,0.5,0.5,15,13,0.5,17,2,8,13,14,18,20];
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [
          { label: 'Tachy %', data: tachy, backgroundColor: 'rgba(240,82,82,0.65)', borderColor: '#f05252', borderWidth: 1, borderRadius: 3 },
          { label: 'Brady %', data: brady, backgroundColor: 'rgba(79,142,247,0.55)', borderColor: '#4f8ef7', borderWidth: 1, borderRadius: 3 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: true, labels: { color: '#8fa3c4', font: { family: "'DM Mono', monospace", size: 10 }, boxWidth: 12 } },
          tooltip: { callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.raw}%` } }
        },
        scales: {
          x: { grid: { color: 'rgba(99,140,210,0.08)' }, ticks: { color: '#4d6488', font: { family: "'DM Mono', monospace", size: 9 } } },
          y: { grid: { color: 'rgba(99,140,210,0.08)' }, ticks: { color: '#4d6488', font: { family: "'DM Mono', monospace", size: 9 }, callback: v => v + '%' }, beginAtZero: true, max: 25 }
        }
      }
    });
  }
}

// ─── FASTING BANNER ───────────────────────────────────────────────────────────
function updateFastingBanner() {
  const banner = document.getElementById('fasting-banner');
  if (!banner) return;
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  const cur = h * 60 + m;
  const eatStart = 14 * 60;
  const eatEnd   = 20 * 60;
  const eating = cur >= eatStart && cur < eatEnd;

  const remaining = eating
    ? eatEnd - cur
    : cur >= eatEnd ? (24 * 60 - cur) + eatStart : eatStart - cur;
  const rh = Math.floor(remaining / 60), rm = remaining % 60;
  const timeLeft = rh > 0 ? `${rh}h ${rm}m` : `${rm}m`;

  if (eating) {
    banner.style.background = 'rgba(34,212,122,0.08)';
    banner.style.border = '1px solid rgba(34,212,122,0.2)';
    banner.innerHTML = `
      <span style="color:var(--green);font-weight:600;">🍽 Eating Window Open</span>
      <span style="color:var(--text3);">Closes at <strong style="color:var(--text2);">8:00 PM</strong> &nbsp;·&nbsp; <strong style="color:var(--green);">${timeLeft}</strong> remaining</span>`;
  } else {
    banner.style.background = 'rgba(79,142,247,0.06)';
    banner.style.border = '1px solid rgba(79,142,247,0.15)';
    banner.innerHTML = `
      <span style="color:var(--blue);font-weight:600;">⏳ Fasting</span>
      <span style="color:var(--text3);">Eating window opens at <strong style="color:var(--text2);">2:00 PM</strong> &nbsp;·&nbsp; <strong style="color:var(--blue);">${timeLeft}</strong> until then</span>`;
  }
}
updateFastingBanner();
setInterval(updateFastingBanner, 60000);

// ─── MED TOGGLE ───────────────────────────────────────────────────────────────
function medToggle(btn) {
  const panel = btn.nextElementSibling;
  const open = panel.style.display === 'block';
  panel.style.display = open ? 'none' : 'block';
  btn.textContent = btn.textContent.replace(open ? '▼' : '▶', open ? '▶' : '▼');
}

// ─── CHART DEFAULTS ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Chart !== 'undefined') {
    Chart.defaults.color = '#4d6488';
    Chart.defaults.borderColor = 'rgba(99,140,210,0.1)';
    Chart.defaults.font.family = "'DM Mono', monospace";
    Chart.defaults.font.size = 10;
  }
});
