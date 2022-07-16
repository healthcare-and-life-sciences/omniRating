
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

import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class OmniRating extends OmniscriptBaseMixin(LightningElement) {

      currentrating;
    
      rating(event) {
        if (event.target.name === "rating") {
          this.currentrating = event.target.value;
          super.omniUpdateDataJson({"Rating":this.currentrating});
        }
      }
    }