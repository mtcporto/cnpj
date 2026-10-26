import {formatCNPJ,digitsOnly,validateCNPJ} from './validation.js';
import {fetchCompany} from './api.js';
import {readHistory,saveHistory,getTheme,setTheme} from './storage.js';
import {renderCompany,renderHistory} from './render.js';
import {showMap} from './map.js';
import {share,printResult,exportPDF} from './export.js';

const form=document.querySelector('#search-form'),input=document.querySelector('#cnpj'),feedback=document.querySelector('#feedback'),result=document.querySelector('#result'),historyBox=document.querySelector('#history'),button=form.querySelector('button');let current;
const message=(text,type='')=>{feedback.textContent=text;feedback.className=`feedback ${type}`;feedback.hidden=!text};
function updateHistory(){const items=readHistory();historyBox.innerHTML=renderHistory(items);historyBox.hidden=!items.length}
function wireResult(data,cnpj){result.querySelectorAll('[data-action]').forEach(control=>control.addEventListener('click',async()=>{try{if(control.dataset.action==='print')printResult();if(control.dataset.action==='pdf')await exportPDF();if(control.dataset.action==='share')await share(cnpj,data.razao_social||'Empresa')}catch(error){message(error.message,'error')}}));const mapButton=result.querySelector('[data-action="map"]');mapButton?.addEventListener('click',()=>showMap(result.querySelector('#map'),[data.logradouro,data.numero,data.municipio,data.uf].filter(Boolean).join(', ')));}
async function search(value){const cnpj=digitsOnly(value);if(!validateCNPJ(cnpj)){message('Digite um CNPJ válido com 14 números.','error');input.focus();return}button.disabled=true;message('Consultando dados da empresa…','loading');result.replaceChildren();try{current=await fetchCompany(cnpj);result.innerHTML=renderCompany(current,formatCNPJ(cnpj));saveHistory(cnpj,current.razao_social);updateHistory();message('Consulta concluída.')}catch(error){message(error.message,'error')}finally{button.disabled=false}}
form.addEventListener('submit',event=>{event.preventDefault();search(input.value)});input.addEventListener('input',()=>{input.value=formatCNPJ(input.value)});historyBox.addEventListener('click',event=>{const cnpj=event.target.dataset.history;if(cnpj){input.value=formatCNPJ(cnpj);search(cnpj)}});
document.querySelector('#theme-toggle').addEventListener('click',()=>{const theme=document.body.classList.toggle('dark')?'dark':'light';setTheme(theme);document.querySelector('#theme-toggle').setAttribute('aria-label',theme==='dark'?'Ativar modo claro':'Ativar modo escuro')});
document.querySelector('#help-toggle').addEventListener('click',()=>document.querySelector('#docs-dialog').showModal());document.querySelector('#docs-close').addEventListener('click',()=>document.querySelector('#docs-dialog').close());
if(getTheme()==='dark')document.body.classList.add('dark');updateHistory();const initial=new URLSearchParams(location.search).get('cnpj');if(initial){input.value=formatCNPJ(initial);search(initial)}
