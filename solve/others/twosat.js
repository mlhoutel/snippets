// 2-SAT Problem 
// - wikipedia: https://en.wikipedia.org/wiki/2-satisfiability
// - paper: https://www.sciencedirect.com/science/article/abs/pii/0020019079900024?via%3Dihub\
// - source: https://www.robindar.com/fr/blog/battledev-12-solutions
// An array of objects, each of which can take two possible values.

// ex: (x1 ∨ x2) ∧ (¬ x1 ∨ x3) ∧ (x2 ∨ x3) ∧ (x4 ∨ ¬ x1), xi ∈ [true, false]
// => does a combination of xi allow this formula to be true ?

// The 2-SAT formula can be converted to an implication graph
// (a ∨ b) <=> (¬a ⇒ b ∧ ¬b ⇒ a)

// 1. For each xi, we create a node Vx and V¬x
// 2. We then add an edge from a to b for each (a ⇒ b)
// 3. If there is a path from a to b, then a ⇒ b
// 4. We have to find values for the graph not to contain a (true ⇒ false)

// - (xi → ¬xi) and (¬xi → xi) then no solution
// - (xi → ¬xi) then xi is false
// - (¬xi → xi) then xi is true
// - propagate implications: (a → b) and a is true, then b is true

// To do this, we can decompose the graph in it's "strongly connected component"
// We can do this with the Tarjan algorithm


// Nonogram puzzle solver: https://en.wikipedia.org/wiki/Nonogram


// - https://en.wikipedia.org/wiki/2-satisfiability
// - https://en.wikipedia.org/wiki/Nonogram