const toast=document.getElementById('toast');let bag=0;
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2400)}
const cards=[...document.querySelectorAll('.product-card')];
function filterProducts(filter){cards.forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));filterProducts(btn.dataset.filter)}));
document.querySelectorAll('.quick-add').forEach(btn=>btn.addEventListener('click',()=>{bag++;const count=document.getElementById('bagCount');if(count)count.textContent=bag;showToast((btn.dataset.product||'Item')+' added to your preview bag. Checkout is not connected yet.')}));
const searchBar=document.getElementById('searchBar'),searchInput=document.getElementById('searchInput');
document.getElementById('searchToggle')?.addEventListener('click',()=>{searchBar?.classList.toggle('open');if(searchBar?.classList.contains('open'))searchInput?.focus()});
document.getElementById('searchClose')?.addEventListener('click',()=>{searchBar?.classList.remove('open');if(searchInput)searchInput.value='';filterProducts(document.querySelector('.filter.active')?.dataset.filter||'all')});
searchInput?.addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();cards.forEach(card=>{const name=(card.dataset.name||card.textContent||'').toLowerCase();card.hidden=!name.includes(q)})});
const menu=document.querySelector('.main-nav');
document.getElementById('menuToggle')?.addEventListener('click',()=>menu?.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>menu.classList.remove('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){searchBar?.classList.remove('open');menu?.classList.remove('open')}});
document.getElementById('newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();showToast('Thanks for your interest! Newsletter signup will be connected before launch.');e.target.reset()});
