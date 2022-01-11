const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const { db } = require('./data/db');
const PORT = process.env.PORT || 3001;