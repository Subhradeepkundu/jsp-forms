<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
<%@ taglib uri="/tags/struts-tiles" prefix="tiles" %>


<div class="forms">

<table class="innerTable" width="100%" cellspacing="0" cellpadding="0">
    <tr>
        <td colspan="3" class="sectionTitleLightGrey">
                        <span class="boldText">PATIENT EMERGENCY PLAN</span>
        </td>        
    </tr>
     <tr>
         <td colspan="3">
                         <span class="boldText">PATIENT NAME:</span>
                         <html:text name="buildFormForm" property="value(pep_Pn_Txt)" size="40" />
        </td>        
    </tr>
     <tr>
         <td width="34%" >
                         <span class="boldText">ADDRESS:</span>
                         <html:text name="buildFormForm" property="value(pep_Adr_Txt)" size="40" />
         </td>       
         <td width="33%">               
                        <span class="boldText">PHONE:  </span>
                        <html:text name="buildFormForm" property="value(pep_Pho_Txt)" size="40" />
        </td> 
        <td >
                       <span class="boldText">CITY:  </span>
                        <html:text name="buildFormForm" property="value(pep_Cty_Txt)" size="40" />
        </td> 
            
    </tr>
    <tr>                
         <td colspan="3">            
                        <span class="boldText">PERSON INSTRUCTED:</span>
                        <html:text name="buildFormForm" property="value(pep_Pi_Txt)" size="40" />
        </td>        
    </tr> 
     <tr> 
         <td colspan="3">            
                        <span class="boldText">PHYSICIAN:</span>
                        <html:text name="buildFormForm" property="value(pep_Phy_Txt)" size="40" />
        </td>        
    </tr>
    <tr> 
         <td>            
                         <span class="boldText">NEXT OF KIN NAME/NUMBER:</span>
                         <html:text name="buildFormForm" property="value(pep_Nokn_Txt)" size="40" />
         </td>       
         <td colspan="2">               
                         <span class="boldText">Emergency Hospice Line:<br><br>810 - 605- 5350</span>
         </td>
    </tr>
</table>


<table class="innerTable" width="100%" cellspacing="0" cellpadding="0">
        <tr>
                <td colspan="2" class="sectionTitleLightGrey">
                    <span class="boldText">PRIORITY/DISASTER CODE:</span>
                </td>
        </tr>
        <tr>
                <td colspan="2">
                    <span class="normalText">In the event of a widespread community emergency or disaster, you will be contacted for medical attention based on your priority level:</span>
                </td>
        </tr> 
        <tr>
                <td colspan="2">           
                    <html:checkbox name="buildFormForm" property="value(pep_Chc_Chk)" styleId="pep_Chc_Chk" />
                    <label class="normalText"for="pep_Chc_Chk">Level 1 - within 24 hours; visit is required per plan of care as soon as safe</label>
                </td>
        </tr>
        <tr>
                <td colspan="2">           
                    <html:checkbox name="buildFormForm" property="value(pep_DlyChk)" styleId="pep_Dly_Chk" />
                    <label class="normalText"for="pep_Dly_Chk">Level 2 - within 24-48 hours; visit essential but may be delayed a few days</label>
                </td>
        </tr>
        <tr>
                <td colspan="2">          
                     <html:checkbox name="buildFormForm" property="value(pep_Aft_Chk)" styleId="pep_Aft_Chk" /><label class="normalText"for="pep_Aft_Chk">Level 3 - Within 48-72 hours; visit may be safely rescheduled</label>
                 </td>
        </tr>
        <tr>
                <td  colspan="2" class="sectionTitleLightGrey">
                    <span class="boldText">INSTRUCTIONS TO FOLLOW</span>
                </td>     
        </tr>
        <tr>
                <td colspan="2">                 
                    <span class="normalText">Make an emergency supply kit. See the DISASTER/EMERGENCY instructions in your SOC packet. </span>
                </td>
        </tr>
        <tr>
                <td colspan="2" >
                    <span class="normalText">Allergies:</span>
                </td>
        </tr> 
        <tr> 
                <td colspan="2">    
                    <span class="boldText">Call Hospice Nurse:</span>
                </td>
        </tr>
        <tr>
                <td width="50%">
                    <span class="normalText">&bull;Unconsciousness</span>
                </td>
                <td >
                    <span class="normalText">&bull; Large amount of bleeding</span>
                </td>
        </tr>
        <tr>
                <td>            
                    <span class="normalText">&bull;Severe breathing difficulty</span>
                </td>
                <td>            
                    <span class="normalText">&bull;Severe fall with suspected injury</span>
                </td>

        </tr>
        <tr>
                <td>              
                     <span class="normalText">&bull;Chest Pain that does not stop</span>
                </td>
                <td>                   
                     <span class="normalText">&bull;Other signs of infections</span>
                </td>

        </tr>

        <tr>
                <td colspan="2">              
                     <span class="normalText">&bull; Change in consciousness or behavior</span>
                </td>
        </tr>
        <tr>
                <td colspan="2">               
                      <span class="normalText">&bull;Temperature of 100 degrees or more</span>
                </td>
         </tr>
          <tr>
                <td colspan="2">     
                      <span class="normalText">&bull;No Bowel movement > 3 days</span>
                </td>
         </tr>                                                    
          <tr>
                 <td colspan="2">             
                       <span class="normalText">&bull; Urinary difficulties, order, plugged catheter</span>
                 </td>

          </tr>                                                       
           <tr>                                                         
                 <td colspan="2">              
                        <span class="normalText">&bull;Severe pain unrelieved by medication</span>
                </td>
          </tr>
           <tr>
                 <td colspan="2">  
                        <span class="normalText">&bull; New or worsening cough or congestion</span>
                </td>
          </tr>
           <tr>
                <td colspan="2">   
                      <span class="normalText">&bull; Other increased swelling in legs or feet</span>
                </td>
          </tr>

</table>  

<table class="innerTable" width="100%" cellspacing="0" cellpadding="0">                                                        
               
    <tr>
                <td width="50%"> 
                                <span class="normalText">Durable Medical Equipment Company: CARELINC </span> 
                </td>
                <td>            
                                <span class="normalText">Phone: 989 746 7370</span>
                </td>
   </tr>

</table>




<table class="outerTable" width="100%" cellspacing="0" cellpadding="0">

    <tr>
                <td width="50%">
                                <span class="boldText">TO CONTACT YOUR NURSE :</span> 
                </td>
                <td>                            
                                <span class="boldText"> CALL: (989)264 6160 </span>
                </td>
    </tr>

</table>



<table class="innerTable" width="100%" cellspacing="0" cellpadding="0"> 
    <tr>
                <td width="10%">
                                <span class="normalText"> In the event of a natural disaster, I plan to: </span>
                </td>
                <td width="1%">
                                <html:checkbox name="buildFormForm" property="value(pep_Stn_Chk)" styleId="pep_Stn_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Stn_Chk"> Stay in my home </label>
                </td>
                <td width="1%"> 
                                <html:checkbox name="buildFormForm" property="value(pep_Goh_Chk)" styleId="pep_Goh_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Goh_Chk"> Go to Hospital (name):</label>
                </td>
                <td width="1%">
                                <html:checkbox name="buildFormForm" property="value(pep_Loc_Chk)" styleId="pep_Loc_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Loc_Chk"> Stay in alternate location (specify):</label><html:text name="buildFormForm" property="value(pep_Loc_Txt)" size="40" />
                </td>
                <td width="1%">
                               <html:checkbox name="buildFormForm" property="value(pep_Sns_Chk)" styleId="pep_Sns_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Sns_Chk"> Go to a Special Needs Shelter (specify):</label><html:text name="buildFormForm" property="value(pep_Sns_Txt)" size="40" />
                </td>
                 <td>            
                                <span class="normalText">In the event of evacuation, do you have transportation?</span>
                 </td>
                <td width="1%">
                                 <html:checkbox name="buildFormForm" property="value(pep_Ys_Chk)" styleId="pep_Ys_Chk" />
                </td>
                <td width="5%"> 
                                <label class="normalText"for="pep_Ys_Chk"> Yes </label>
                </td>
                <td width="1%">
                                <html:checkbox name="buildFormForm" property="value(pep_No_Chk)" styleId="pep_No_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_No_Chk"> No </label>
                </td>
        <tr>
                <td colspan="13"> 
                                 <span class="normalText">Special needs:</span>
                </td>
        </tr>   
        <tr>                        
                <td width="1%">
                                <html:checkbox name="buildFormForm" property="value(pep_Bb_Chk)" styleId="pep_Bb_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Bb_Chk"> Bedbound </label>
                </td>
                <td width="1%">
                                <html:checkbox name="buildFormForm" property="value(pep_Oxy_Chk)" styleId="pep_Oxy_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Oxy_Chk"> Oxygen </label>
                </td>
                <td width="1%">
                                <html:checkbox name="buildFormForm" property="value(pep_Wha_Chk)" styleId="pep_Wha_Chk" />
                </td>
                 <td width="5%">
                                 <label class="normalText"for="pep_Wha_Chk"> Wheelchair\ambulance </label>
                </td>
                <td width="1%">
                                 <html:checkbox name="buildFormForm" property="value(pep_Oth_Chk)" styleId="pep_Oth_Chk" />
                </td>
                <td width="5%">
                                <label class="normalText"for="pep_Oth_Chk"> Other specify:</label><html:text name="buildFormForm" property="value(pep_Oth_Txt)" size="40" />
                </td>
        </tr>    
        <tr>                                                            
                <td colspan="13" >
                                <span class="normalText">This information is provided to you as a quick reference source in case of any emergency. Keep this where it can be<br>
                                 easily found. Inform other persons close to you (relative, neighbor) of its location and your plans. </span>
                 </td>                                                                                                                
     </tr>
</table>


<table class="outerTable" width="100%" cellspacing="0" cellpadding="0">
    <tr>
            <td></td>
    </tr>
</table>


<table class="outerTable" width="100%" cellspacing="0" cellpadding="0">
    <tr>
            <td class="sectionTitleLightGrey"> <span class="boldText">PATIENT EMERGENCY PLAN</span></td>
    </tr>
</table>

<table class="outerTable" width="100%" cellspacing="0" cellpadding="0">
    <tr>
        <td>
            <span class="normalText"> Please call your Nurse at (989) 264-6160 if you experience any new illnesses, injuries, or<br>
                symptoms. You potentially can avoid a trip to the doctors office or emergency room by<br>checking with the Nurse first such as</span>
        </td>
    </tr>
</table>


<table class="innerTable" width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td width="50%">
                             <span class="boldText">Heart /Lung Problems:</span>
            </td>
            <td >
                              <span class="boldText">Urinary Problems:</span>
            </td>
        </tr>
        <tr>
            <td>                            
                              <span class="normalText">&bull; new or worsening cough or congestion</span>
            </td>
            <td>                            
                              <span class="normalText">&bull;foul odor to urine</span>
            </td>
        </tr> 
        <tr>
            <td>                        
                            <span class="normalText">&bull;increased shortness of breath</span>
            </td>
            <td>            
                            <span class="normalText">&bull; catheter not draining</span>
            </td>
        </tr>  
        <tr>
            <td>                           
                            <span class="normalText">&bull; new onset irregular or rapid heartbeat</span>
            </td>
            <td>           
                            <span class="normalText">&bull; unable to urinate</span>
            </td>
        </tr> 
         <tr>
            <td>                              
                            <span class="normalText">&bull; chest pain relieved by rest or medication</span>
            </td>
            <td>            <span class="normalText">&bull; increase weakness or confusion</span></td>
        </tr>  
        <tr>
            <td>            
                            <span class="normalText">&bull; more swelling in your legs or feet</span>
            </td>
            <td>           
                             <span class="normalText">&bull; bloody, cloudy or change in urine color</span>
            </td>
        </tr>
        <tr>
                            <td colspan="2"> <span class="normalText">  • fluid weight gain 3 pounds in 24 hours<br>  or 5 pounds in a week</span></td>
        </tr> 
</table>




<table class="innerTable" width="100%" cellspacing="0" cellpadding="0">
    <tr>
            <td width="50%"> 
                            <span class="boldText">Signs of Infection:</span>
            </td>
            <td > 
                            <span class="boldText">Too Much Blood Thinner:</span>
            </td>
    </tr>
    <tr>
            <td>           
                             <span class="normalText">&bull;increased redness</span>
            </td>
            <td>             
                             <span class="normalText">&bull;bleeding from nose, gums, rectum, skin</span>
            </td>
    </tr> 
    <tr>
            <td>              
                             <span class="normalText">&bull;wound getting bigger or more painful</span>
            </td>
             <td>                      
                             <span class="normalText">&bull;brushing</span>
            </td>
    </tr>  
    <tr>
            <td>              
                             <span class="normalText">&bull;temperature of 100 degrees or more</span>
            </td>
            <td>            
                             <span class="normalText">&bull;leg pain</span>
            </td>
    </tr> 
    <tr>
            <td>           
                             <span class="normalText">&bull;increase or change in wound drainage</span>
            </td>
            <td>            
                             <span class="normalText">&bull; blood in urine</span>
            </td>
    </tr>  
    <tr>
            <td>            
                             <span class="normalText">amount, color, or odor</span>
            </td>
            <td>             
                             <span class="normalText">&bull; bloody, cloudy or change in urine color</span>
            </td>
    </tr>
    <tr>
            <td colspan="2">
                             <span class="normalText"> &bull;fluid weight gain 3 pounds in 24 hours<br>  or 5 pounds in a week</span>
            </td>
    </tr> 
</table>
     

<table class="innerTable" width="100%" cellspacing="0" cellpadding="0">
    <tr>
                <td width="50%">
                                 <span class="boldText">Diabetic Problems:</span>
                </td>
                <td >
                                 <span class="boldText">Too Much Blood Thinner:</span>
                </td>
    </tr>
    <tr>
                <td>            
                                <span class="normalText">&bull;increase weakness, fatigue, or dizziness</span>
                </td>
                <td>            
                                <span class="normalText">&bull; fall with small or no injury</span>
                </td>
    </tr> 
    <tr>
                <td>            
                                <span class="normalText"> &bull; uncontrollable thirst or hunger</span>
                </td>
                <td>            
                                <span class="normalText">&bull; no bowel movements in 3 days</span>
                </td>
    </tr>  
    <tr>
                <td>            
                                <span class="normalText">&bull;increased urination</span>
                </td>
                <td>           
                                 <span class="normalText">&bull;change in balance,strengths</span>
                </td>
    </tr> 
    <tr>
                <td>           
                                 <span class="normalText">&bull; sweating spells</span>
                </td>
                <td>            
                                <span class="normalText">&bull;new skin problems</span>
                </td>
    </tr>  
    <tr>
                <td>            
                                <span class="normalText"> &bull; frequent headaches</span>
                </td>
                <td>            
                                <span class="normalText">&bull;change in mental status</span>
                </td>
    </tr>
    <tr>
                <td>            
                                <span class="normalText">&bull; new sore or skin problem</span>
                </td>
                <td>                            
                                <span class="normalText">signs of high blood pressure:</span>
                </td>
    </tr>
    <tr>
                    <td>            
                                <span class="normalText">&bull; when your sugars are not in goal range</span>
                    </td>
                    <td>        
                                <span class="normalText">headache, dizziness, nosebleeds,</span>
                    </td>
    </tr>
    <tr>
                    <td>            
                                <span class="normalText">&bull; low or high blood sugar that are <br>severe or occur often</span>
                     </td>
                     <td>           
                                <span class="normalText">blurred vision</span>
                     </td>
    </tr>
</table>




<table class="innerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px">
    <tr>
        <td>
            <span class="boldText"> Patient specific instructions:</span>
            <html:textarea name="buildFormForm" property="value(pen_Intr_Chk)" style="width:100%;height:60px" rows="1" /> 
        </td>        
    </tr>
    <tr>
        <td>
           <span class="boldText">This plan is a guide and not intended to override patient/family decisions in seeking care</span>
        </td>
    </tr>
</table>


</div>




 