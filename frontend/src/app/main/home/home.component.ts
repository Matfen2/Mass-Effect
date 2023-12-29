import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  massEffect = [
    {
      id: 1,
      wallpaper: '/assets/pict/massEffectMain.jpg',
      logo: '/assets/pict/massEffectLegendaryEditionLogo.jpg',
      psn: 'https://www.playstation.com/fr-be/games/mass-effect-legendary-edition/',
      xbox: 'https://www.xbox.com/fr-FR/games/store/mass-effect-edition-legendaire/9PKWHT7G60WQ',
      pc: 'https://store.steampowered.com/app/1328670/Mass_Effect_Legendary_Edition/',
    },
    {
      id: 2,
      wallpaper: '/assets/pict/massEffectAndromeda.jpg',
      logo: '/assets/pict/massEffectAndromedaLogo.png',
      psn: 'https://www.playstation.com/fr-fr/games/mass-effect-andromeda/',
      xbox: 'https://www.xbox.com/fr-FR/games/store/mass-effect-andromeda/BZPR04V49BMH',
      pc: 'https://store.steampowered.com/app/1238000/Mass_Effect_Andromeda_Deluxe_Edition/',
    },
  ];

  characters: string = '';

  showCharacter(friend: string) {
    this.characters = friend;
  }

  // CONTACT
  successmsg: any = 'Message envoyé avec succès';
  errormsg: any = "Echec de l'envoie du message";

  answer = new FormGroup({
    adress: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  contact() {
    this.authService.sendMessage(this.answer.value).subscribe(
      (res) => {
        alert(this.successmsg);
      },
      (error) => {
        alert(this.errormsg);
      }
    );
  }

  ngOnInit(): void {}
}
