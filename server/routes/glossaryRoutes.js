const express = require("express")
const router = express.Router()
const {
   getGlossary,
   newGlossary,
} = require("../controller/glossaryControllers")

// route GET /api/glossary
router.get("/", getGlossary)

// route POST /api/glossary
router.post("/", newGlossary)

module.exports = router
