import { browser, element, by } from 'protractor';

export class A2componentsdocPage {
  navigateTo() {
    return browser.get('/');
  }
  
  // Get Header area content
  getHeaderText() {
    return element(by.css('app-root .layout-header-area-alignment h1')).getText();
  }
  
  // Get Left side area content
  getLeftAreaText() {
    return element(by.css('app-root .layout-left-area-alignment h1')).getText();
  }

  // Ensure Center area records
  getCenterAreaText() {
    return element(by.css('app-root .layout-center-area-alignment table tbody tr td')).getText();
  }
}
