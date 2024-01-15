const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const darken = document.getElementById('darken');
const arr_up_feature = document.getElementById('arrow-up_feature');
const arr_down_feature = document.getElementById('arrow-down_feature');
const arr_up_company = document.getElementById('arrow-up_company');
const arr_down_company = document.getElementById('arrow-down_company');
const feature_desktop = document.getElementById('feature');
const company_desktop = document.getElementById('company');
const feature_menu = document.getElementById('feature_menu');
const company_menu = document.getElementById('company_menu');
const feature_mobile = document.getElementById('feature_mobile');
const feature_mobile_menu = document.getElementById('feature-menu_mobile');
const company_mobile = document.getElementById('company_mobile');
const company_mobile_menu = document.getElementById('company_menu_mobile');
const arr_up_feature_mobile = document.getElementById(
  'arrow-up_feature_mobile'
);
const arr_down_company_mobile = document.getElementById(
  'arrow-down_company_mobile'
);
const arr_up_company_mobile = document.getElementById(
  'arrow-up_company_mobile'
);
const arr_down_feature_mobile = document.getElementById(
  'arrow-down_feature_mobile'
);

feature_desktop.addEventListener('click', featureMenuclickHandler);
company_desktop.addEventListener('click', companyMenuClickHandler);
feature_mobile.addEventListener('click', featureMobileMenuClickHandler);
company_mobile.addEventListener('click', companyMobileMenuClickHandler);
btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('opened');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
  darken.classList.toggle('darken');
}
function featureMenuclickHandler() {
  arr_down_feature.classList.toggle('hidden');
  arr_up_feature.classList.toggle('block');
  feature_menu.classList.toggle('flex');
  arr_up_feature.classList.toggle('hidden');
  arr_down_feature.classList.toggle('block');
  feature_menu.classList.toggle('hidden');
}
function companyMenuClickHandler() {
  arr_down_company.classList.toggle('hidden');
  arr_up_company.classList.toggle('block');
  company_menu.classList.toggle('flex');
  arr_up_company.classList.toggle('hidden');
  arr_down_company.classList.toggle('block');
  company_menu.classList.toggle('hidden');
}
function featureMobileMenuClickHandler() {
  arr_down_feature_mobile.classList.toggle('hidden');
  arr_up_feature_mobile.classList.toggle('block');
  feature_mobile_menu.classList.toggle('flex');
  arr_up_feature_mobile.classList.toggle('hidden');
  arr_down_feature_mobile.classList.toggle('block');
  feature_mobile_menu.classList.toggle('hidden');
}
function companyMobileMenuClickHandler() {
  arr_down_company_mobile.classList.toggle('hidden');
  arr_up_company_mobile.classList.toggle('block');
  company_mobile_menu.classList.toggle('flex');
  arr_up_company_mobile.classList.toggle('hidden');
  arr_down_company_mobile.classList.toggle('block');
  company_mobile_menu.classList.toggle('hidden');
}
