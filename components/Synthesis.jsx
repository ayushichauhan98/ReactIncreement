import React, { Component } from 'react'
import App from "../App"
import Header from './Header';
var x;
var Prem;
var y = "Radha"
const Synthesis = Prem = x = () => <Header x={y} />
// console.log(p(y))
console.log(Synthesis("Krishna"))  // scope valid till now
console.log(Prem("Prem")) // scope valid till now
export { Synthesis, Prem }