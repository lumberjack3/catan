var catan = catan || {};
catan.definitions = catan.definitions || {};

catan.definitions.DisplayElement.ComboElement = (function(){
        var Definitions = catan.definitions;
        var Basics = catan.definitions.DisplayElement.BasicElements;
       
       
			function ComboElement(displayGroupName, valueToDisplay, action, amountChanger, chooser){
					this.setDisplayValue(valueToDisplay);
					this.setDisplayGroupName(displayGroupName);
					this.setAction(action)
					this.setAmountChangeElem(amountChanger);
					this.setChooserElem(chooser);
					this.setView(this.buildView());
			}
			
			/* these are all the things that a display element may need*/
			core.defineProperty(ComboElement.prototype, "DisplayGroupName");//such as send, receive, ...
			core.defineProperty(ComboElement.prototype, "DisplayValue");//such as wood, wheat, solider...
			core.defineProperty(ComboElement.prototype, "ActionElem");//the thing that will actually do something
			core.defineProperty(ComboElement.prototype, "Action");//the thing that will actually do something
			core.defineProperty(ComboElement.prototype, "LabelElem");//the thing that will actually do something
			core.defineProperty(ComboElement.prototype, "AmountChangeElem");//a button that changes the label based on what the controller says
			core.defineProperty(ComboElement.prototype, "ChooserElem");//a button that changes the label based on what the controller says
			core.defineProperty(ComboElement.prototype, "View");//a button that changes the label based on what the controller says
			
			/* the only public function.*/
			ComboElement.prototype.buildView = function(){
					var GroupNames = Definitions.GroupNames;
					var result = undefined;
					
					switch(this.getDisplayGroupName()){
							case GroupNames.domesticTrade:
									return makeDomesticTradeResourceElement.call(this);
							case GroupNames.maritimeSend:
									return makeMaritimeTradeElement.call(this);
							case GroupNames.maritimeReceive:
									return makeMaritimeTradeElement.call(this);
							case GroupNames.discard:
									return makeDiscardResourceElement.call(this);    
							case GroupNames.card:
									return makeDevCardElement.call(this);  
							case GroupNames.resourceAction:
									return makeResourceActionElement.call(this);     
							case GroupNames.resourceDisplay:
									return makeResourceDisplayElement.call(this);
							case GroupNames.resourceOverlay:
									return makeResourceActionElement.call(this);
							default:
									break;
					}
					return result;  
			}
			
			/* all the private build-view functions*/
			var makeDomesticTradeResourceElement = function(){
				   // var amountNames  = Definitions.display.DomesticTradeAmountGroups;
					
					var container = document.createElement("div");
						 container.setAttribute("class","domestic-resource-box auto-margins");
					
					var image = new Basics.StaticImage(this.getDisplayValue(), "domestic-resource-img auto-margins");
					  container.appendChild(image);
					
					var chooser = this.getChooserElem();
						container.appendChild(chooser.buildView());
					
					var amountElem = this.getAmountChangeElem();//something with a label, a plus, and a minus
						container.appendChild(amountElem.buildView());
						amountElem.hide();
				 
					return container;
			}
			
			var makeMaritimeTradeElement= function(){
				   if(this.getDisplayValue() == Definitions.MaritimeUndo)
						return makeMaritimeTradeUndoElement.call(this);
					
					return makeMaritimeTradeResourceElement.call(this);
			}
			
			var makeMaritimeTradeResourceElement= function(){
					var container = document.createElement("div");
						container.setAttribute("class","maritime-resource-box");
				   
					var image = new Basics.InteractiveImage(this.getDisplayValue(), "maritime-resource-img", this.getAction());
							container.appendChild(image);
							this.setActionElem(image);
							
					return container;
			}
			var makeMaritimeTradeUndoElement= function(){
					var container = document.createElement("div");
						container.setAttribute("class","maritime-undo-amount-box");
					
					  var image = new Basics.InteractiveImage(this.getDisplayValue(), "maritime-undo-img", this.getAction());
							container.appendChild(image);
							this.setActionElem(image);
					 var amount = new Basics.Label("font-medium");//2nd param is the amount to display
							this.setLabelElem(amount);
					 var amountContainer = document.createElement("div");
							amountContainer.setAttribute("class", "maritime-amount-box");
							amountContainer.appendChild(amount);
							container.appendChild(amountContainer);
							
					return container;
			}
			var makeDiscardResourceElement= function(){
				var container = document.createElement("div");
					container.setAttribute("class","discard-box");
					
				var label = new Basics.Label("");
					container.appendChild(label);
					this.setLabelElem(label);
					
				var image = new Basics.StaticImage(this.getDisplayValue(), "discard-img");
					container.appendChild(image);
							
				var amount = this.getAmountChangeElem();
					container.appendChild(amount.buildView());
					amount.show();
				return container;
			}
			var makeResourceDisplayElement= function(){
					var container = document.createElement("div");
						container.setAttribute("class","resource-bar-box");
					
					var image = new Basics.StaticImage(this.getDisplayValue(), "resource-bar-img");
							container.appendChild(image);
							
					var amount = new Basics.Label("font-large resource-bar-label");
							container.appendChild(amount);
							this.setLabelElem(amount);
					
					return container;
			}
			var makeResourceActionElement= function(){
					var container = document.createElement("div");
						container.setAttribute("class","resource-bar-box");
					
					var image = new Basics.InteractiveImage(this.getDisplayValue(), "resource-bar-img buyable-icon", this.getAction());
							container.appendChild(image);
							this.setActionElem(image);
							
					var amount = new Basics.Label("font-large resource-bar-label");
							container.appendChild(amount);
							this.setLabelElem(amount);
							
					return container;
			}
			var makeDevCardElement= function(){
					var container = document.createElement("div");
						container.setAttribute("class", "card-box");
					
					var image = new Basics.InteractiveImage(this.getDisplayValue(), "card-img", this.getAction());
						container.appendChild(image);
						this.setActionElem(image);
					
					var amount = new Basics.Label("font-medium");
							container.appendChild(amount);
					this.setLabelElem(amount);
							
					return container;
			}
			
			/* all the update-view functions*/
			ComboElement.prototype.disable= function(keepVisible){
				if(this.getActionElem() != undefined){
					if(keepVisible){
						this.getActionElem().onclick = undefined;
						this.getActionElem().readOnly = true;
					}else
						this.getActionElem().disabled = true;
				}
			}
			ComboElement.prototype.enable= function(keepVisible){
				if(this.getActionElem() != undefined){
					this.getActionElem().onclick = this.getAction();
					this.getActionElem().readOnly = undefined;
					
					this.getActionElem().disabled = undefined;
				}
			}
			ComboElement.prototype.setMouseIn= function(action){
				if(this.getActionElem() != undefined){
					this.getActionElem().onmouseover = action;
				}
			}
			ComboElement.prototype.setMouseOut= function(action){
				if(this.getActionElem() != undefined){
					this.getActionElem().onmouseout = action;
				}
			}
			ComboElement.prototype.updateLabel= function(content){
				
				if(this.getLabelElem() != undefined){
					if(content != undefined)
						this.getLabelElem().value = content;
				}
			}
			ComboElement.prototype.hide= function(){
				if(this.getActionElem() != undefined)
					this.getActionElem().disabled = true;	
				if(this.getLabelElem() != undefined)
					this.getLabelElem().value = "";	
				this.getView().setAttribute("style","display:none;");	
			}
			ComboElement.prototype.show= function(){
				if(this.getActionElem() != undefined)
					this.getActionElem().disabled = false;
				this.getView().setAttribute("style","display:inline-block;");
			}
			ComboElement.prototype.resetView= function(){
				if(this.getChooserElem() != undefined)
					this.getChooserElem().reset();
			}
			return ComboElement;
}());
