import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cases from '@/pages/Cases'
import Combo from '@/pages/Combo'
import Appointment from '@/pages/Appointment'
import Fitment from '@/pages/Fitment'
import Photo from '@/pages/Photo'
import StaffStyle from '@/pages/StaffStyle'
import Service from '@/pages/Service'
import YueTa from '@/pages/YueTa'
import FitmentDetails from '@/pages/FitmentDetails'
import ComboDetails from '@/pages/ComboDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cases',
      name: 'Cases',
      component: Cases
    },
    {
      path: '/Combo',
      name: 'Combo',
      component: Combo
    },
    {
      path: '/Appointment',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/user/Fitment',
      name: 'Fitment',
      component: Fitment
    },
    {
      path: '/user/Photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/user/StaffStyle',
      name: 'StaffStyle',
      component: StaffStyle
    },
    {
      path: '/user/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/user/YueTa',
      name: 'YueTa',
      component: YueTa
    },
    {
      path: '/user/FitmentDetails',
      name: 'FitmentDetails',
      component: FitmentDetails
    },
    {
      path: '/user/ComboDetails',
      name: 'ComboDetails',
      component: ComboDetails
    }
  ]
})
