import axios from "axios";
import React from 'react'

const instance = axios.create({
  baseURL:"http://localhost:9090/api/products"
})

export default instance