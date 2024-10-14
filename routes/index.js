var express = require('express');
var router = express.Router();
const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', async function(req, res, next) {
  let books = await prisma.book.findMany({
    include: {author: true}
  });
  console.log(books);
  res.render('books', {
    title: 'Books',
    books: books
  })
})

module.exports = router;
