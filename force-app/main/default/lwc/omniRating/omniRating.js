
/**
  This is a simple LWC that displays 5 stars and allows the user to select 1 through 5 as a rating.  
  The LWC extends OmniBaseMixin so it can be used in a OmniScript.   It will write to the JSON in the 
  form Screen1:CustonLWC1:Rating:3
  This was inspired fron a web post.  Credit given below.  
  
  @see https://www.accidentalcodersf.com/2020/06/salesforce-lwc-create-star-rating.html

  
  @author Derek Cassese - dcassese@salesforce.com
  @version 1.0
 
  History
  =======
  July 16, 2022 - v1.0 - Initial Version
  
  Configuration
  =============
  None

  

  Notes
  =====
  

 */

import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class OmniRating extends OmniscriptBaseMixin(LightningElement) {

      @api size;
      @api selectedColor;
      @api hoverSelectedColor;
      @api hoverNotSelectedColor;
      currentrating;
      setSize = true;
      setColor = true;

      renderedCallback() { 
        console.log('SetSize',this.size)
        console.log('SetColor',this.selectedColor+'-'+this.hoverNotSelectedColor+'-'+ this.hoverSelectedColor);
       
        this.initCSSVariables();
        
        /* JFYI, use a flag if you only want to run this logic on first render of the component. */

    }

    initCSSVariables() {
        var css = document.body.style;
        if((this.size != null) && (this.setSize=true))
        {
          css.setProperty('--size', this.size);
        }
        else {
          css.setProperty('--size', '16px');
        }
        if((this.selectedColor != null) && (this.setColor)) {
          css.setProperty('--selectedColor',this.selectedColor);
          css.setProperty('--hoverSelectedColor',this.hoverSelectedColor);
          css.setProperty('--hoverNotSelectedColor',this.hoverNotSelectedColor);
        }else{
          css.setProperty('--selectedColor','#ffc700');
          css.setProperty('--hoverSelectedColor','#c59b08');
          css.setProperty('--hoverNotSelectedColor','#deb217');
        }
          
        this.setSize=false;
        this.setColor=false;
    }


      rating(event) {
        if (event.target.name === "rating") {
          this.currentrating = event.target.value;
          super.omniUpdateDataJson({"Rating":this.currentrating});
        }
      }
    }