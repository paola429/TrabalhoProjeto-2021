const express = require("express");
const routes = express.Router();
const upload = multer({ dest: 'public/upload/' })
const upload = require ("../config/multer")