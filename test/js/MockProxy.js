module.exports = MockProxy;

var testModel={"deck":{"yearOfPlenty":2,"monopoly":2,"soldier":14,"roadBuilding":2,"monument":5},"map":{"hexGrid":{"hexes":[[{"isLand":false,"location":{"x":0,"y":-3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":1,"y":-3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":2,"y":-3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":3,"y":-3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}],[{"isLand":false,"location":{"x":-1,"y":-2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":true,"location":{"x":0,"y":-2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Brick","isLand":true,"location":{"x":1,"y":-2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":3}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Wood","isLand":true,"location":{"x":2,"y":-2},"vertexes":[{"value":{"worth":1,"ownerID":3}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":3}}]},{"isLand":false,"location":{"x":3,"y":-2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}],[{"isLand":false,"location":{"x":-2,"y":-1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Brick","isLand":true,"location":{"x":-1,"y":-1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":1}},{"value":{"ownerID":-1}}]},{"landtype":"Wood","isLand":true,"location":{"x":0,"y":-1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Ore","isLand":true,"location":{"x":1,"y":-1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":3}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":2}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":3}},{"value":{"ownerID":-1}},{"value":{"ownerID":2}},{"value":{"ownerID":-1}}]},{"landtype":"Sheep","isLand":true,"location":{"x":2,"y":-1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":3,"y":-1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}],[{"isLand":false,"location":{"x":-3,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Ore","isLand":true,"location":{"x":-2,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Sheep","isLand":true,"location":{"x":-1,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Wheat","isLand":true,"location":{"x":0,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":2}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":2}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":2}},{"value":{"ownerID":-1}}]},{"landtype":"Brick","isLand":true,"location":{"x":1,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":2}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":2}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Wheat","isLand":true,"location":{"x":2,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":0}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":0}}]},{"isLand":false,"location":{"x":3,"y":0},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}],[{"isLand":false,"location":{"x":-3,"y":1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Wheat","isLand":true,"location":{"x":-2,"y":1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":1}}]},{"landtype":"Sheep","isLand":true,"location":{"x":-1,"y":1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":2}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":3}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":3}}]},{"landtype":"Wood","isLand":true,"location":{"x":0,"y":1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":2}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":0}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":2}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":0}},{"value":{"ownerID":-1}}]},{"landtype":"Sheep","isLand":true,"location":{"x":1,"y":1},"vertexes":[{"value":{"worth":1,"ownerID":0}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":0}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":0}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":2,"y":1},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":0}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}],[{"isLand":false,"location":{"x":-3,"y":2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Wood","isLand":true,"location":{"x":-2,"y":2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":3}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":3}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Ore","isLand":true,"location":{"x":-1,"y":2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":3}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"landtype":"Wheat","isLand":true,"location":{"x":0,"y":2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":1,"ownerID":0}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":0}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":1,"y":2},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}],[{"isLand":false,"location":{"x":-3,"y":3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":-2,"y":3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":-1,"y":3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]},{"isLand":false,"location":{"x":0,"y":3},"vertexes":[{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}},{"value":{"worth":0,"ownerID":-1}}],"edges":[{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}},{"value":{"ownerID":-1}}]}]],"offsets":[3,2,1,0,0,0,0],"radius":4,"x0":3,"y0":3},"radius":4,"numbers":{"2":[{"x":-2,"y":1}],"3":[{"x":-1,"y":2},{"x":0,"y":-1}],"4":[{"x":1,"y":-2},{"x":0,"y":1}],"5":[{"x":1,"y":0},{"x":-2,"y":0}],"6":[{"x":2,"y":0},{"x":-2,"y":2}],"8":[{"x":0,"y":2},{"x":-1,"y":-1}],"9":[{"x":1,"y":-1},{"x":-1,"y":1}],"10":[{"x":1,"y":1},{"x":-1,"y":0}],"11":[{"x":2,"y":-2},{"x":0,"y":0}],"12":[{"x":2,"y":-1}]},"ports":[{"ratio":2,"inputResource":"Sheep","validVertex1":{"direction":"W","x":3,"y":-1},"validVertex2":{"direction":"NW","x":3,"y":-1},"orientation":"NW","location":{"x":3,"y":-1}},{"ratio":3,"validVertex1":{"direction":"E","x":-3,"y":0},"validVertex2":{"direction":"SE","x":-3,"y":0},"orientation":"SE","location":{"x":-3,"y":0}},{"ratio":2,"inputResource":"Brick","validVertex1":{"direction":"NE","x":-2,"y":3},"validVertex2":{"direction":"E","x":-2,"y":3},"orientation":"NE","location":{"x":-2,"y":3}},{"ratio":3,"validVertex1":{"direction":"SW","x":3,"y":-3},"validVertex2":{"direction":"W","x":3,"y":-3},"orientation":"SW","location":{"x":3,"y":-3}},{"ratio":3,"validVertex1":{"direction":"NW","x":0,"y":3},"validVertex2":{"direction":"NE","x":0,"y":3},"orientation":"N","location":{"x":0,"y":3}},{"ratio":3,"validVertex1":{"direction":"W","x":2,"y":1},"validVertex2":{"direction":"NW","x":2,"y":1},"orientation":"NW","location":{"x":2,"y":1}},{"ratio":2,"inputResource":"Ore","validVertex1":{"direction":"SE","x":1,"y":-3},"validVertex2":{"direction":"SW","x":1,"y":-3},"orientation":"S","location":{"x":1,"y":-3}},{"ratio":2,"inputResource":"Wheat","validVertex1":{"direction":"SE","x":-1,"y":-2},"validVertex2":{"direction":"SW","x":-1,"y":-2},"orientation":"S","location":{"x":-1,"y":-2}},{"ratio":2,"inputResource":"Wood","validVertex1":{"direction":"NE","x":-3,"y":2},"validVertex2":{"direction":"E","x":-3,"y":2},"orientation":"NE","location":{"x":-3,"y":2}}],"robber":{"x":0,"y":-2}},"players":[{"MAX_GAME_POINTS":10,"resources":{"brick":0,"wood":1,"sheep":1,"wheat":1,"ore":0},"oldDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"newDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"roads":13,"cities":4,"settlements":3,"soldiers":0,"victoryPoints":2,"monuments":0,"longestRoad":false,"largestArmy":false,"playedDevCard":false,"discarded":false,"playerID":0,"orderNumber":0,"name":"Sam","color":"red"},{"MAX_GAME_POINTS":10,"resources":{"brick":1,"wood":0,"sheep":1,"wheat":0,"ore":1},"oldDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"newDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"roads":13,"cities":4,"settlements":3,"soldiers":0,"victoryPoints":2,"monuments":0,"longestRoad":false,"largestArmy":false,"playedDevCard":false,"discarded":false,"playerID":1,"orderNumber":1,"name":"Brooke","color":"blue"},{"MAX_GAME_POINTS":10,"resources":{"brick":0,"wood":1,"sheep":1,"wheat":1,"ore":0},"oldDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"newDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"roads":13,"cities":4,"settlements":3,"soldiers":0,"victoryPoints":2,"monuments":0,"longestRoad":false,"largestArmy":false,"playedDevCard":false,"discarded":false,"playerID":10,"orderNumber":2,"name":"Pete","color":"red"},{"MAX_GAME_POINTS":10,"resources":{"brick":0,"wood":1,"sheep":1,"wheat":0,"ore":1},"oldDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"newDevCards":{"yearOfPlenty":0,"monopoly":0,"soldier":0,"roadBuilding":0,"monument":0},"roads":13,"cities":4,"settlements":3,"soldiers":0,"victoryPoints":2,"monuments":0,"longestRoad":false,"largestArmy":false,"playedDevCard":false,"discarded":false,"playerID":11,"orderNumber":3,"name":"Mark","color":"green"}],"log":{"lines":[{"source":"Sam","message":"Sam built a road"},{"source":"Sam","message":"Sam built a settlement"},{"source":"Sam","message":"Sam\u0027s turn just ended"},{"source":"Brooke","message":"Brooke built a road"},{"source":"Brooke","message":"Brooke built a settlement"},{"source":"Brooke","message":"Brooke\u0027s turn just ended"},{"source":"Pete","message":"Pete built a road"},{"source":"Pete","message":"Pete built a settlement"},{"source":"Pete","message":"Pete\u0027s turn just ended"},{"source":"Mark","message":"Mark built a road"},{"source":"Mark","message":"Mark built a settlement"},{"source":"Mark","message":"Mark\u0027s turn just ended"},{"source":"Mark","message":"Mark built a road"},{"source":"Mark","message":"Mark built a settlement"},{"source":"Mark","message":"Mark\u0027s turn just ended"},{"source":"Pete","message":"Pete built a road"},{"source":"Pete","message":"Pete built a settlement"},{"source":"Pete","message":"Pete\u0027s turn just ended"},{"source":"Brooke","message":"Brooke built a road"},{"source":"Brooke","message":"Brooke built a settlement"},{"source":"Brooke","message":"Brooke\u0027s turn just ended"},{"source":"Sam","message":"Sam built a road"},{"source":"Sam","message":"Sam built a settlement"},{"source":"Sam","message":"Sam\u0027s turn just ended"}]},"chat":{"lines":[]},"bank":{"brick":23,"wood":21,"sheep":20,"wheat":22,"ore":22},"turnTracker":{"status":"Rolling","currentTurn":0},"biggestArmy":2,"longestRoad":-1,"winner":-1};

function MockProxy(loadModelFunc){
	this.loadModel=loadModelFunc;
	this.commands=[];
	this.lastCommand = {
		getData:function(){
			throw new Error('No commands received');
		}
	}
}

MockProxy.prototype.executeCommand=function(command){
	if(command === undefined)
		throw new Error('Cannot execute an undefined command');
	this.commands.push(command);
	this.lastCommand = command;
	if(this.loadModel && typeof this.loadModel ==='function'){
		this.loadModel(testModel);
	}
};

