import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadScript('assets/js/jquery-3.4.1.min.js');
    this.loadScript('assets/js/bootstrap.js');
  }

  private loadScript(url: string): void {
    const script = this.renderer.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }
}
