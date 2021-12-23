import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import HTML from '../components/HTML.vue'
import CSS from '../components/CSS.vue'
import Bootstrap from '../components/Bootstrap.vue'
import d1assignment from '../view/HTML/Day1/assignment/assignment.vue'
import d1practice1 from '../view/HTML/Day1/practice/practice1.vue'
import d1practice2 from '../view/HTML/Day1/practice/practice2.vue'
import d1practice3 from '../view/HTML/Day1/practice/practice3.vue'
import d1practice4 from '../view/HTML/Day1/practice/practice4.vue'
import d1practice5 from '../view/HTML/Day1/practice/practice5.vue'
import d2audiovideo from '../view/HTML/Day2/AudioVideo.vue'
import cssd1assignment from '../view/CSS/Day1/Assignment/assignment.vue'
import cssd1practice1 from '../view/CSS/Day1/Practice/practice1.vue'
import cssd1practice2 from '../view/CSS/Day1/Practice/practice2.vue'
import cssd1practice3 from '../view/CSS/Day1/Practice/practice3.vue'
import cssd1practice4 from '../view/CSS/Day1/Practice/practice4.vue'
import cssd1practice5 from '../view/CSS/Day1/Practice/practice5.vue'
import cssd2practice1 from '../view/CSS/Day2/Practice/Practice1.vue'
import cssd2practice2 from '../view/CSS/Day2/Practice/Practice2.vue'
import cssd2practice3 from '../view/CSS/Day2/Practice/Practice3.vue'
import cssd3assignment from '../view/CSS/Day3/Assignment/Assignment.vue'
import cssd3practice1 from '../view/CSS/Day3/Practice/Practice1.vue'
import cssd3practice2 from '../view/CSS/Day3/Practice/Practice2.vue'
import cssd3practice3 from '../view/CSS/Day3/Practice/Practice3.vue'
import cssd3practice4 from '../view/CSS/Day3/Practice/Practice4.vue'
import cssd3practice5 from '../view/CSS/Day3/Practice/Practice5.vue'
import cssd4practice1 from '../view/CSS/Day4/Practice/Practice1.vue'
import cssd4practice2 from '../view/CSS/Day4/Practice/Practice2.vue'
import cssd4practice3 from '../view/CSS/Day4/Practice/Practice3.vue'
import cssd4practice4 from '../view/CSS/Day4/Practice/Practice4.vue'
import alert from '../view/Bootstrap/Day1/CSS_components/Alerts.vue'
import Buttons from '../view/Bootstrap/Day1/CSS_components/Buttons.vue'
import ListGroup from '../view/Bootstrap/Day1/CSS_components/ListGroup.vue'
import Borders from '../view/Bootstrap/Day1/Utilities/Borders.vue'
import Spacing from '../view/Bootstrap/Day1/Utilities/Spacing.vue'
import Typography from '../view/Bootstrap/Day1/Utilities/Typography.vue'
import Flexbox from '../view/Bootstrap/Day2/Grid_and_flexbox/Flexbox.vue'
import Grid from '../view/Bootstrap/Day2/Grid_and_flexbox/Grid.vue'
import Accordion from '../view/Bootstrap/Day2/Javascript_widgets/Accordion.vue'
import Modals from '../view/Bootstrap/Day2/Javascript_widgets/Modals.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
      path: '/html',
      name: 'HTML',
      component: HTML,
      children: [
          {
              path: 'day1/assignment',
              name: 'assignment',
              component: d1assignment
          },
          {
              path: 'day1/practice1',
              name: 'practice1',
              component: d1practice1
          },
          {
              path: 'day1/practice2',
              name: 'practice2',
              component: d1practice2
          },
          {
              path: 'day1/practice3',
              name: 'practice3',
              component: d1practice3
          },
          {
              path: 'day1/practice4',
              name: 'practice4',
              component: d1practice4
          },
          {
              path: 'day1/practice5',
              name: 'practice5',
              component: d1practice5
          },
          {
              path: 'day2/audiovideo',
              name: 'audiovideo',
              component: d2audiovideo
          },

      ]
  },
  {
      path: '/css',
      name: 'CSS',
      component: CSS,
      children: [
          {
            path: 'day1/assignment',
            name: 'cssd1assignment',
            component: cssd1assignment
          },
          {
            path: 'day1/practice1',
            name: 'cssd1practice1',
            component: cssd1practice1
          },
          {
            path: 'day1/practice2',
            name: 'cssd1practice2',
            component: cssd1practice2
          },
          {
            path: 'day1/practice3',
            name: 'cssd1practice3',
            component: cssd1practice3
          },
          {
            path: 'day1/practice4',
            name: 'cssd1practice4',
            component: cssd1practice4
          },
          {
            path: 'day1/practice5',
            name: 'cssd1practice5',
            component: cssd1practice5
          },
          {
            path: 'day2/practice1',
            name: 'cssd2practice1',
            component: cssd2practice1
          },
          {
            path: 'day2/practice2',
            name: 'cssd2practice2',
            component: cssd2practice2
          },
          {
            path: 'day2/practice3',
            name: 'cssd2practice3',
            component: cssd2practice3
          },
          {
            path: 'day2/assignment',
            name: 'cssd3assignment',
            component: cssd3assignment
          },
          {
            path: 'day3/practice1',
            name: 'cssd3practice1',
            component: cssd3practice1
          },
          {
            path: 'day3/practice2',
            name: 'cssd3practice2',
            component: cssd3practice2
          },
          {
            path: 'day3/practice3',
            name: 'cssd3practice3',
            component: cssd3practice3
          },
          {
            path: 'day3/practice4',
            name: 'cssd3practice4',
            component: cssd3practice4
          },
          {
            path: 'day3/practice5',
            name: 'cssd3practice5',
            component: cssd3practice5
          },
          {
            path: 'day4/practice1',
            name: 'cssd4practice1',
            component: cssd4practice1
          },
          {
            path: 'day4/practice2',
            name: 'cssd4practice2',
            component: cssd4practice2
          },
          {
            path: 'day4/practice3',
            name: 'cssd4practice3',
            component: cssd4practice3
          },
          {
            path: 'day4/practice4',
            name: 'cssd4practice4',
            component: cssd4practice4
          },

      ]
  },
  {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap,
      children: [
        {
          path: 'day1/alerts',
          name: 'alert',
          component: alert
        },
        {
          path: 'day1/buttons',
          name: 'buttons',
          component: Buttons
        },
        {
          path: 'day1/listgroups',
          name: 'listgroup',
          component: ListGroup
        },
        {
          path: 'day1/borders',
          name: 'borders',
          component: Borders
        },
        {
          path: 'day1/spacing',
          name: 'spacing',
          component: Spacing
        },
        {
          path: 'day1/typography',
          name: 'typography',
          component: Typography
        },
        {
          path: 'day2/flexbox',
          name: 'flexbox',
          component: Flexbox
        },
        {
          path: 'day2/grid',
          name: 'grid',
          component: Grid
        },
        {
          path: 'day2/accordions',
          name: 'accordion',
          component: Accordion
        },
        {
          path: 'day2/modals',
          name: 'modals',
          component: Modals
        },
      ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;