import { getAdvantages, getAbilityText } from './../../../common/cards';
import { Image, Term } from './../../../data/data';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';
import { ElemType, ELEMENTS, TERM_CODES, IMAGE_CODES, Css, Path } from './../../../../types/dataTypes';
import { ELEMENTS_COLOR, ELEMENTS_GRAY, ROLES, HP } from './../../../../constants';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: MonsterComplete;
  monsterAbilityHtml: string;
  ELEMENT_LIST = ELEMENTS;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  ngOnInit() {
    this.monsterAbilityHtml = this.monster.abilityText;
    // console.log(JSON.stringify(this.monster, null, 2));
    // const blob = new Blob([JSON.stringify(this.monster, null, 2)], {type : 'application/json'});
    // saveAs(blob, 'abc.json');

  }

  constructor(
  ) {}

  getEffectivenessArray(monster: MonsterComplete) {
    const arrs = [].concat(monster.elements.map((el: ElemType) => getAdvantages(el)));
    const totals = [0, 0, 0, 0, 0, 0];
    arrs.forEach(arr => {arr.forEach((num: number, i: number) => {totals[i] += num; }); });
    const values = totals.map(num => {
        if (num !== 0) {
            return num * -1;
        } else {
            return num;
        }
    });
    const out: string[] = [];
    values.forEach((num: number, i: number) => out.push(this.getEffectivenessSymbol(num)));
    return out;
  }

  getEffectivenessSymbol(num: number): string {
    switch (num) {
      case -2: return '--';
      case -1: return '-';
      case 0: return '';
      case 1: return '+';
      case 2: return '++';
    }
  }

  hasElement(element: ElemType): boolean {
    return this.monster.elements.includes(element);
  }

  getElementColorImg(element: string): Path {
    return `${ELEMENTS_COLOR}${element.toLocaleLowerCase()}.png`;
  }

  getElementGrayImg(element: string): Path {
    return `${ELEMENTS_GRAY}${element.toLocaleLowerCase()}.png`;
  }

  getRoleIcon(): Path {
    return `${ROLES}${this.monster.role.toLocaleLowerCase()}.png`;
  }

  getHpIcon(): Path {
    return `${HP}${this.monster.hp}.png`;
  }

  getAbilityText(): string {
    return getAbilityText(this.monster.abilityText, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
