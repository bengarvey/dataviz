import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Auto from './components/Auto'
import Lbs from './components/Lbs'
import Libraries from './components/Libraries'
import PagerDuty from './components/PagerDuty'
import Tornadoes from './components/Tornadoes'
import Resp from './components/Resp'


var App = () => (
  <div className="main">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auto' component={Auto}/>
        <Route path='/lbs' component={Lbs}/>
        <Route path='/libraries' component={Libraries}/>
        <Route path='/pagerduty' component={PagerDuty}/>
        <Route path='/tornadoes' component={Tornadoes}/>
        <Route path='/resp' component={Resp}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
