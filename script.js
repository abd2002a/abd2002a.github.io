// Header scroll
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('sc', scrollY > 50);
  document.getElementById('btt').classList.toggle('show', scrollY > 400);
  const secs = ['home', 'feat', 'products', 'categories', 'about', 'services', 'contact'];
  let cur = '';
  secs.forEach(id => { const el = document.getElementById(id); if (el && scrollY >= el.offsetTop - 200) cur = id; });
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('ac', a.getAttribute('href') === '#' + cur));
});
// Hero bg
setTimeout(() => document.getElementById('heroBg').classList.add('ld'), 100);
// Mobile nav
document.getElementById('hbtn').onclick = () => document.getElementById('mnav').classList.add('open');
document.getElementById('mcl').onclick = cm;
function cm() { document.getElementById('mnav').classList.remove('open') }
// Reveal
const ro = new IntersectionObserver((es) => { es.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('vis'), i * 75); ro.unobserve(e.target); } }); }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.rv,.rvl,.rvr').forEach(el => ro.observe(el));
// Cart
let cc = 0;
function ac(e) {
  e.stopPropagation(); cc++;
  const b = document.getElementById('cBadge'); b.textContent = cc;
  b.style.transform = 'scale(1.6)'; setTimeout(() => b.style.transform = 'scale(1)', 200);
  const btn = e.target, orig = btn.textContent;
  btn.textContent = '✓ Added'; btn.style.background = '#1a7a1a';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1500);
}
// Filter
function fp(btn, cat) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('ac'));
  btn.classList.add('ac');
  document.querySelectorAll('.pc').forEach(c => {
    const show = cat === 'all' || c.dataset.cat === cat;
    c.style.display = show ? 'block' : 'none';
  });
}
// Testimonial
let cs = 0;
function gs(n) {
  cs = n;
  const w = document.querySelector('.tt').offsetWidth;
  const iw = document.querySelector('.ti .tc').offsetWidth + 22;
  document.getElementById('tInner').style.transform = `translateX(-${n * (iw)}px)`;
  document.querySelectorAll('.td').forEach((d, i) => d.classList.toggle('ac', i === n));
  document.querySelectorAll('.tc').forEach((c, i) => c.classList.toggle('ac', i === n));
}
setInterval(() => gs((cs + 1) % 3), 5000);
// Newsletter
function sub() {
  const i = document.getElementById('eInp');
  if (!i.value || !i.value.includes('@')) { i.style.borderColor = '#ff4444'; i.placeholder = 'Enter a valid email'; setTimeout(() => { i.style.borderColor = ''; i.placeholder = 'Your email address...'; }, 2000); return; }
  i.value = ''; i.placeholder = '✓ Subscribed! Thank you.';
  setTimeout(() => i.placeholder = 'Your email address...', 3000);
}