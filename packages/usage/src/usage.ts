import { Alpha } from '@fluent-elements/alpha';
import { Beta } from '@fluent-elements/beta';

export class Usage {
  public alpha = new Alpha('usage alpha');
  public beta = new Beta('usage beta');

  constructor(public name: string) {}
}
