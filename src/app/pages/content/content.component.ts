import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from '../../components/small-card/small-card.component'; // Ensure SmallCardComponent is standalone

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  noticias = [
    {
      id: '1',
      cardTitle: 'Auroras em Júpiter',
      photoCover: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pia21033.jpg'
    },
    {
      id: '2',
      cardTitle: 'Tempestades gigantescas',
      photoCover: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pia21974-16.jpg'
    },
    {
      id: '3',
      cardTitle: 'Nova lua descoberta',
      photoCover: 'https://www.nasa.gov/sites/default/files/thumbnails/image/juno-jupiter-092016.jpg'
    }
    
  ];
}