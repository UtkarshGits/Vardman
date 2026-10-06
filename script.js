/* Medicine content. Add matching artwork in IMG below. */
var M = [
  {
    id: "paracetamol",
    name: "Paracetamol",
    brand: "Verdane Pyrex",
    cat: "Pain & fever",
    form: "Tablet, syrup",
    sum: "Relief from mild to moderate pain and fever.",
    use: ["Headache and migraine", "Toothache and muscle pain", "Fever from colds or flu"],
    how: "Taken by mouth with or without food. Follow the label or your doctor for the amount and the gap between doses. Never combine with other products containing paracetamol.",
    care: ["Exceeding the recommended amount can seriously damage the liver.", "Tell your doctor if you have liver disease or drink alcohol regularly."],
  },
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    brand: "Verdane Amoxi",
    cat: "Antibiotic",
    form: "Capsule, suspension",
    sum: "A penicillin-type antibiotic for bacterial infections.",
    use: ["Ear, throat and sinus infections", "Chest and urinary tract infections", "Some skin infections"],
    how: "Prescription only. Take the full course exactly as prescribed, even if you feel better early.",
    care: ["Do not use if allergic to penicillin.", "Antibiotics do not work on viral illnesses such as colds."],
  },
  {
    id: "cetirizine",
    name: "Cetirizine",
    brand: "Verdane Allerfree",
    cat: "Allergy",
    form: "Tablet, syrup",
    sum: "A non-drowsy-for-most antihistamine for allergy symptoms.",
    use: ["Hay fever and sneezing", "Itchy, watery eyes", "Hives and itchy skin"],
    how: "Usually taken once a day. Follow the label for your age group.",
    care: ["May cause drowsiness in some people; be careful when driving.", "Ask a pharmacist if you are pregnant or have kidney problems."],
  },
  {
    id: "omeprazole",
    name: "Omeprazole",
    brand: "Verdane Gastroguard",
    cat: "Digestive health",
    form: "Capsule",
    sum: "Reduces stomach acid to ease heartburn and reflux.",
    use: ["Acid reflux and heartburn", "Stomach ulcers (as prescribed)", "Protection during some long-term treatments"],
    how: "Usually taken before a meal, swallowed whole. Duration depends on your condition.",
    care: ["Long-term use should be reviewed by your doctor.", "See a doctor if you have trouble swallowing or unexplained weight loss."],
  },
  {
    id: "metformin",
    name: "Metformin",
    brand: "Verdane Glucomet",
    cat: "Diabetes care",
    form: "Tablet",
    sum: "Helps control blood sugar in type 2 diabetes.",
    use: ["Type 2 diabetes management", "Used alongside diet and exercise"],
    how: "Prescription only. Often taken with meals to reduce stomach upset. Dose is set by your doctor.",
    care: ["Report severe vomiting, dehydration or unusual tiredness at once.", "Kidney function should be checked regularly."],
  },
  {
    id: "ors",
    name: "Oral Rehydration Salts",
    brand: "Verdane Rehydra",
    cat: "Hydration",
    form: "Sachet powder",
    sum: "Replaces water and salts lost through diarrhoea or heat.",
    use: ["Diarrhoea and vomiting", "Heat exhaustion and heavy sweating"],
    how: "Dissolve one sachet in the exact amount of clean water stated on the pack and drink in small sips.",
    care: ["Do not add extra sugar or salt.", "Seek care if symptoms last more than a day or two, especially in children."],
  },
];

var IMG = {
  paracetamol: ["#e2574c", "box", "Pyrex"],
  amoxicillin: ["#2f7fd1", "box", "Amoxi"],
  cetirizine: ["#8a5cc7", "bottle", "Allerfree", "#e8a93c"],
  omeprazole: ["#d98a1f", "bottle", "Gastroguard", "#f4f4f0"],
  metformin: ["#0f8a6e", "blister", "Glucomet"],
  ors: ["#1aa0b8", "sachet", "Rehydra"],
};

function T(x, y, size, fill, text) {
  return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Trebuchet MS,sans-serif" font-weight="700" font-size="' + size + '" fill="' + fill + '">' + text + "</text>";
}

function inner(id) {
  var artwork = IMG[id];
  var color = artwork[0];
  var type = artwork[1];
  var name = artwork[2];
  var markup = '<ellipse cx="100" cy="186" rx="58" ry="7" fill="#000" opacity=".12"/>';
  var i;
  var j;

  if (type === "box") {
    markup += '<rect x="42" y="26" width="112" height="154" rx="7" fill="#fff"/><path d="M154 30l13 7v138l-13 5z" fill="#000" opacity=".14"/><rect x="42" y="26" width="112" height="52" rx="7" fill="' + color + '"/>' + T(98, 59, 17, "#fff", name) + '<circle cx="72" cy="118" r="14" fill="' + color + '" opacity=".22"/><rect x="92" y="108" width="46" height="8" rx="4" fill="#d3dcd7"/><rect x="92" y="124" width="34" height="8" rx="4" fill="#d3dcd7"/>' + T(98, 163, 10, color, "Verdane Pharma");
  } else if (type === "bottle") {
    markup += '<rect x="78" y="14" width="44" height="30" rx="6" fill="#fff" stroke="' + color + '" stroke-width="3"/><rect x="86" y="43" width="28" height="12" fill="#d9c9a5"/><rect x="58" y="52" width="84" height="130" rx="16" fill="' + artwork[3] + '"/><rect x="58" y="88" width="84" height="66" fill="#fff"/><rect x="58" y="88" width="84" height="14" fill="' + color + '"/>' + T(100, 128, 11, color, name) + T(100, 143, 8, "#566a61", "Verdane Pharma");
  } else if (type === "blister") {
    markup += '<rect x="18" y="46" width="164" height="108" rx="10" fill="#dde5e1" stroke="#fff" stroke-width="2"/>';
    for (i = 0; i < 5; i++) {
      for (j = 0; j < 2; j++) {
        markup += '<ellipse cx="' + (46 + i * 27) + '" cy="' + (76 + j * 34) + '" rx="10" ry="12" fill="#fff" stroke="' + color + '" stroke-width="2"/>';
      }
    }
    markup += T(100, 140, 12, color, name) + '<rect x="18" y="146" width="164" height="8" fill="' + color + '"/>';
  } else {
    for (i = 0; i < 2; i++) {
      markup += '<g transform="rotate(' + (i ? 9 : -9) + ' 100 110) translate(' + (i ? 18 : -18) + ' 0)"><rect x="66" y="40" width="68" height="132" rx="4" fill="#fff" stroke="#d3dcd7"/><rect x="66" y="40" width="68" height="8" fill="#cfd8d3"/><rect x="66" y="70" width="68" height="40" fill="' + color + '"/>' + T(100, 96, 12, "#fff", name) + T(100, 140, 8, "#566a61", "Verdane") + "</g>";
    }
  }
  return markup;
}

function svg(id) {
  return '<svg viewBox="0 0 200 200" role="img" aria-label="' + IMG[id][2] + ' pack">' + inner(id) + "</svg>";
}

function nest(id, x, y, size, className) {
  return '<g class="' + className + '"><svg x="' + x + '" y="' + y + '" width="' + size + '" height="' + size + '" viewBox="0 0 200 200">' + inner(id) + "</svg></g>";
}

function heroArt() {
  return '<svg viewBox="0 0 420 340" role="img" aria-label="Verdane Pharma medicine range"><defs><linearGradient id="cg"><stop offset=".5" style="stop-color:var(--brand)"/><stop offset=".5" style="stop-color:var(--card)"/></linearGradient></defs><circle cx="215" cy="175" r="150" fill="var(--brand2)"/><circle cx="215" cy="175" r="108" fill="none" stroke="var(--brand)" stroke-opacity=".3" stroke-dasharray="4 8"/><path d="M60 80c30-40 70-30 70 10-40 10-60 5-70-10z" fill="var(--brand)" opacity=".85"/><path d="M345 260c-30 30-60 20-60-12 35-8 52-3 60 12z" fill="var(--brand)" opacity=".6"/>' + nest("cetirizine", 30, 110, 170, "bob2") + nest("ors", 225, 110, 170, "bob2") + nest("paracetamol", 105, 60, 210, "bob") + '<g class="bob2"><rect x="300" y="70" width="64" height="26" rx="13" transform="rotate(-25 332 83)" fill="url(#cg)" stroke="var(--brand)" stroke-width="2"/></g></svg>';
}

function lab() {
  var flask = function (x, y, size, color) {
    return '<g transform="translate(' + x + " " + y + ") scale(" + size + ')"><path d="M-10 0h20v38l30 62c4 8-1 14-9 14h-62c-8 0-13-6-9-14l30-62z" fill="var(--card)" stroke="var(--brand)" stroke-width="3"/><path d="M-28 76h56l12 24c4 8-1 14-9 14h-62c-8 0-13-6-9-14z" fill="' + color + '" opacity=".8"/></g>';
  };
  return '<svg viewBox="0 0 600 190" role="img" aria-label="Laboratory illustration"><rect y="152" width="600" height="38" fill="var(--brand)" opacity=".18"/>' + flask(120, 30, 1.1, "#0f6b57") + flask(230, 50, 0.9, "#4fc4a3") + flask(320, 40, 1, "#1aa0b8") + '<g stroke="var(--brand)" stroke-width="3" fill="var(--card)"><path d="M440 60l40-20 40 20v50l-40 20-40-20z" fill="var(--brand2)"/><circle cx="480" cy="40" r="9"/><circle cx="520" cy="60" r="9"/><circle cx="520" cy="110" r="9"/><circle cx="480" cy="130" r="9"/><circle cx="440" cy="110" r="9"/><circle cx="440" cy="60" r="9"/></g></svg>';
}

var app = document.getElementById("app");

function card(m) {
  return '<a class="card" href="index.html#/medicines/' + m.id + '"><div class="thumb">' + svg(m.id) + "</div><h3>" + m.name + '</h3><span class="tag">' + m.cat + '</span><p style="margin-top:10px">' + m.sum + "</p></a>";
}

function home() {
  return '<section class="hero"><div class="ht"><h1>Everyday medicines, explained clearly.</h1><p>Verdane Pharma makes trusted generic medicines and shares plain-language information about each one. Browse our range below.</p><a class="btn" href="index.html#/medicines">View all medicines</a><div class="stats"><div><b data-n="6">6</b><span>Core medicines</span></div><div><b data-n="25" data-s="+">25+</b><span>Years in healthcare</span></div><div><b>GMP</b><span>Certified plants</span></div></div></div><div class="hart">' + heroArt() + '</div></section><div class="feat"><div><i>✓</i><span><b>Quality tested</b>Every batch is lab-checked.</span></div><div><i>✓</i><span><b>Pharmacist support</b>Free advice, Mon–Sat.</span></div><div><i>✓</i><span><b>Clear information</b>Plain-language guides.</span></div></div><h2>Our medicines</h2><div class="grid">' + M.map(card).join("") + "</div>";
}

function list() {
  return '<h2 style="margin-top:0">All medicines</h2><div class="grid">' + M.map(card).join("") + "</div>";
}

function detail(index) {
  var medicine = M[index];
  var previous = M[(index + M.length - 1) % M.length];
  var next = M[(index + 1) % M.length];
  return '<div class="crumb"><a href="index.html#/">Home</a> / <a href="index.html#/medicines">Medicines</a> / ' + medicine.name + '</div><div class="detail"><div><h1 style="margin:0 0 4px;font-size:38px">' + medicine.name + '</h1><p style="color:var(--mute);margin-top:0">' + medicine.sum + '</p><h2 style="font-size:22px">Used for</h2><ul>' + medicine.use.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul><h2 style="font-size:22px">How it is taken</h2><p>' + medicine.how + '</p><h2 style="font-size:22px">Important cautions</h2><ul>' + medicine.care.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul><div class="note">This page is general information, not medical advice. Read the leaflet in your pack and ask a doctor or pharmacist before use.</div></div><aside class="side"><div class="thumb">' + svg(medicine.id) + '</div><dl style="margin:0"><dt>Brand</dt><dd>' + medicine.brand + "</dd><dt>Category</dt><dd>" + medicine.cat + "</dd><dt>Forms</dt><dd>" + medicine.form + '</dd></dl><a class="btn" href="contact.html">Ask about this</a></aside></div><div class="pager"><a href="index.html#/medicines/' + previous.id + '">‹ ' + previous.name + '</a><a href="index.html#/medicines/' + next.id + '">' + next.name + " ›</a></div>";
}

function about() {
  return '<div class="banner">' + lab() + '</div><h2 style="margin-top:0">About Verdane Pharma</h2><p style="max-width:62ch">We began as a small pharmacy lab with one goal: make dependable medicines affordable and easy to understand. Today our plants follow Good Manufacturing Practice and every batch is tested before it leaves the site.</p><p style="max-width:62ch">Each medicine page on this site is written for patients, in plain language, and reviewed by our pharmacists.</p><a class="btn" href="index.html#/medicines">See our range</a>';
}

function contact() {
  return '<h2 style="margin-top:0">Contact us</h2><div class="grid"><div class="card"><h3>Customer care</h3><p>care@verdane-pharma.example</p></div><div class="card"><h3>Pharmacist helpline</h3><p>Mon–Sat, 9am–6pm<br>+00 000 000 0000</p></div><div class="card"><h3>Head office</h3><p>12 Green Park Road, Sample City</p></div></div><div class="note">For emergencies or serious side effects, contact your local emergency service or doctor immediately.</div>';
}

function count() {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  document.querySelectorAll("[data-n]").forEach(function (element) {
    var number = +element.dataset.n;
    var suffix = element.dataset.s || "";
    var start = null;
    function animate(time) {
      start = start || time;
      var progress = Math.min((time - start) / 1000, 1);
      element.textContent = Math.round(number * (1 - Math.pow(1 - progress, 3))) + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  });
}

function route() {
  var hash = location.hash.replace(/^#\/?/, "");
  var parts = hash.split("/");
  var output;
  if (parts[0] === "medicines" && parts[1]) {
    var index = M.findIndex(function (medicine) { return medicine.id === parts[1]; });
    output = index > -1 ? detail(index) : list();
  } else if (parts[0] === "medicines") output = list();
  else if (parts[0] === "about") output = about();
  else if (parts[0] === "contact") output = contact();
  else output = home();
  app.innerHTML = output;
  window.scrollTo(0, 0);
  count();
  document.querySelectorAll("#nav a[data-r]").forEach(function (link) {
    link.classList.toggle("on", link.dataset.r === parts[0] || (link.dataset.r === "" && !parts[0]));
  });
  var selected = M.find(function (medicine) { return medicine.id === parts[1]; });
  document.title = (selected ? selected.name + " – " : "") + "Verdane Pharma";
}

window.addEventListener("hashchange", route);
route();