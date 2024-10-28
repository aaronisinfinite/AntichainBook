var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  under construction.   copyright  "
},
{
  "id": "ch1-1",
  "level": "1",
  "url": "ch1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Exercises",
  "body": " Exercises   examples can have hints, answers, and solutions.   Cute result   Prove that     A hint is given here.    A short answer is given here.    A detailed solution is given here.    exercises seem to only support hints. don't know yet why the exercise is automatically labeled checkpoint.  whoa  Derive the principal of conservation of energy.   A hint is given here.   A short answer is given here.   A detailed solution is given here.   "
},
{
  "id": "ch1-1-4",
  "level": "2",
  "url": "ch1-1.html#ch1-1-4",
  "type": "Example",
  "number": "1.1.1",
  "title": "Cute result.",
  "body": " Cute result   Prove that     A hint is given here.    A short answer is given here.    A detailed solution is given here.   "
},
{
  "id": "ch1-1-6",
  "level": "2",
  "url": "ch1-1.html#ch1-1-6",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "whoa.",
  "body": "whoa  Derive the principal of conservation of energy.   A hint is given here.   A short answer is given here.   A detailed solution is given here.  "
},
{
  "id": "ch2-1",
  "level": "1",
  "url": "ch2-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "matlab\/octave",
  "body": " matlab\/octave  The cells on this page are linked to each so that calculations done in one cell are available to others.  Evaluate the cell below before continuing.   After evaluating the cell below using desired and , the antichain's sizes, marginal values, etc... are available using A.size, A.marg, etc... \/\/ A.size = sizes \/\/ A.marg = marginal values \/\/ A.vol = volumes \/\/ A.blym = blym \/\/ A.numk = n choose k \/\/ A.numk1 = n choose (k-1) \/\/            "
},
{
  "id": "ch2-2",
  "level": "1",
  "url": "ch2-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "python",
  "body": " python  here are python cells generating volume graph         "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " this is colophon.  This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
