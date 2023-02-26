import { createStore } from '@stencil/store';

export interface State {
  pageTheme: 'light' | 'dark';
}

const { state } = createStore<State>({
  pageTheme: 'dark',
});

export const defaults = {
  title: 'Megabyte Labs',
  description: 'Explore the Megabyte Labs eco-system for free, enterprise-grade, open-source projects and solutions',
  meta_image: 'https://megabyte.space/assets/img/og.png',
};

export default state;
