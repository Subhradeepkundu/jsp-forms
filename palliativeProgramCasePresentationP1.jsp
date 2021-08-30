<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %> 
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
<%@ taglib uri="/tags/struts-tiles" prefix="tiles" %>
<style type="text/css">
   table.printTextArea tr td {
       vertical-align: top;
       font-family: Arial, Helvetica, sans-serif;
   }
   table.printTextArea pre {
       table-layout: fixed;
       margin: 0px;
   }
</style>
      
       <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0">
               <tr>
                         <td colspan="3"> <span class="normalText">2021 Palliative Program Case Presentation</span></td>
               </tr>
                <tr>
                         <td  colspan="3" class="sectionTitleLightGrey"><span >GENERAL INFORMATION</span></td>
                </tr>
                <tr >
                         <td>            <span class="normalText">Vendor:</span><html:text name="buildFormForm" property="value(pan_Vendor_Txt)" size="40" /></td>
                         <td colspan="2"><span class="normalText">Case PresentationDate:</span><html:text name="buildFormForm" property="value(pan_Cpd_Txt)" size="40" /></td>
                </tr>
                <tr >
                         <td width="33%"><span class="normalText">Patient Name:</span><html:text name="buildFormForm" property="value(pan_Pn_Txt)" size="40" /></td>
                         <td width="33%"><span class="normalText">Contract Number (ID):</span><html:text name="buildFormForm" property="value(pan_Contractnum_Txt)" size="40" /></td>
                         <td>            <span class="normalText">Age:</span><html:text name="buildFormForm" property="value(pan_Age_Txt)" size="3" /></td>
                </tr>
                <tr>
                         <td>            <span class="normalText">Admission Date:</span><html:text name="buildFormForm" property="value(pan_Ad_Txt)" size="11" />
                                                                                        <html:img styleClass="datePicker" /></td>
                         <td colspan="2">

                            <table width="100%" cellpadding="0" cellspacing="0">
                           <tr>
                              <td width="10%"><span class="normalText nowrap" >Level of Care:</span></td>
                              <td width="1%"><html:checkbox name="buildFormForm" property="value(pat_Basic_Chk)" styleId="pat_Basic_Chk" /> </td>
                              <td width="5%"><label class="normalText"for="pat_Basic_Chk">BASIC</label></td>
                              <td width="1%"><html:checkbox name="buildFormForm" property="value(pat_Moder_Chk)" styleId="pat_Moder_Chk" /></td>
                              <td width="5%"><label class="normalText"for="pat_Moder_Chk">MODERATE</label></td>
                              <td width="1%"><html:checkbox name="buildFormForm" property="value(pat_Sever_Chk)" styleId="pat_Sever_Chk" /></td>
                              <td>           <label class="normalText"for="pat_Sever_Chk">SEVERE</label></td>

                           </tr>
                          </table>
                       </td>
                        

                </tr>

              <tr>
                             <td>            <span class="normalText">Life Expectancy:</span><html:text name="buildFormForm" property="value(pat_Le_Txt)" size="40" /></td>
                             <td colspan="2"><span class="normalText">Period of time in the current level of care (months):</span><html:text name="buildFormForm" property="value(bap_Pot_Txt)" size="40" /></td>
              </tr>

      </table>



       <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px" >
              <tr>
                        <td colspan="4" class="sectionTitleLightGrey"><span>CARE MEMBER TEAM MEDICAL CONDITION</span></td>
             </tr>
              <tr>
                        <td >                        <span class="normalText">Clinical Specialist:</span><html:text name="buildFormForm" property="value(bap_cl_Txt)" size="40" /></td>
                        <td width="67%" colspan="3"><span class="normalText">Physician:</span><html:text name="buildFormForm" property="value(bap_phy_Txt)" size="40" /></td>
             </tr>
             <tr>
                       <td>                          <span class="normalText">Social Worker:</span><html:text name="buildFormForm" property="value(bap_sw_Txt)" size="40" /> </td>
                       <td colspan="3">             <span class="normalText">Spiritual Guide:</span><html:text name="buildFormForm" property="value(bap_sg_Txt)" size="40" />  </td>
             </tr>
             <tr>
                       <td>                          <span class="normalText">Primary Care Physician:</span><html:text name="buildFormForm" property="value(bap_pcp_Txt)" size="40" /> </td>
                       <td colspan="3">             <span class="normalText">Oncologist: </span><html:text name="buildFormForm" property="value(bap_onc_Txt)" size="40" /> </td>
              </tr>
              <tr>
                       <td>                          <span class="normalText">Mental Health Specialist:</span><html:text name="buildFormForm" property="value(bap_mhs_Txt)" size="40" />  </td>
                       <td colspan="3">             <span class="normalText">Other:</span><html:text name="buildFormForm" property="value(bap_oth_Txt)" size="40" />  </td>
              </tr>
              <tr>
                      <td>                           <span class="normalText">Physical Diagnosis:</span><html:text name="buildFormForm" property="value(bap_pd_Txt)" size="25" /> </td>
                       <td colspan="3">              <span class="normalText">Mental Diagnosis :</span><html:text name="buildFormForm" property="value(bap_md_Txt)" size="25" /> </td>
              </tr>

              <tr>
               
                <td colspan="2"> 
                  <table width="100%" cellpadding="0" cellspacing="0">
                 <tr>
                      <td width="30%">               <span class="normalText nowrap" >Primary Care Physician invited:</span></td>
                      <td width="1%">                <html:checkbox name="buildFormForm" property="value(pat_Ys_Chk)" styleId="pat_Ys_Chk" /></td>
                      <td width="5%">                <label class="normalText"for="pat_Ys_Chk">YES</label></td>
                      <td width="1%">                <html:checkbox name="buildFormForm" property="value(pat_No_Chk)" styleId="pat_No_Chk" /></td>
                      <td><label class="normalText"for="pat_No_Chk">NO</label></td>
                   
                 </tr>
              </table>
             </td>



                <td colspan="2">
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                               <td width="30%"><span class="normalText nowrap">Mental Health provider invited:</span></td>
                               <td width="1%"><html:checkbox name="buildFormForm" property="value(pat_Yss_Chk)" styleId="pat_Yss_Chk" /></td>
                               <td width="5%"><label class="normalText"for="pat_Yss_Chk">YES</label></td>
                               <td width="1%"><html:checkbox name="buildFormForm" property="value(pat_Noo_Chk)" styleId="pat_Noo_Chk" /></td>
                               <td width="5%"><label class="normalText"for="pat_Noo_Chk">NO</label></td>
                               <td width="1%"><html:checkbox name="buildFormForm" property="value(pat_Nul_Chk)" styleId="pat_Nul_Chk" /></td>
                               <td ><label class="normalText"for="pat_Nul_Chk">NA</label></td>


                        </tr>
                   </table>
               </td>

       
           </tr>

        </table>

          

            <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px">
               <tr>
                  <td colspan="6" class="sectionTitleLightGrey"><span>DISCUSSION REASON </span></td>
               </tr>

               <tr>

                  <td width="33%">
                     <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px">
                         <tr>

                              <td valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Phab_Chk)" styleId="pat_Phab_Chk" /></td>
                              <td>                          <label class="normalText"for="pat_Phab_Chk">Physical Health access barriers</label></td> 

                         </tr>
                         <tr>

                              <td valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Mhab_Chk)" styleId="pat_Mhab_Chk" /></td> 
                              <td>                         <label class="normalText"for="pat_Mhab_Chk">Mental Health access barriers </label></td>

                         </tr> 
                         <tr>                                
                                                           
                              <td valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Soe_Chk)" styleId="pat_Soe_Chk" /></td> 
                              <td>                         <label class="normalText"for="pat_Soe_Chk">Social or economic barriers to care </label></td>

                         </tr>
                         <tr>                                         
                              <td valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Recread_Chk)" styleId="pat_Recread_Chk" /></td> 
                              <td>                         <label class="normalText"for="pat_Recread_Chk">Recurrent Readmission/ ER visits  </label> </td>

                         </tr>                      
                     </table>

                  </td>

                   <td width="34%">
                     <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px">
                        <tr>
                              <td  valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Nos_Chk)" styleId="pat_Nos_Chk" /></td> 
                              <td>                          <label class="normalText"for="pat_Nos_Chk">Need for specific Mental and Physical<br>integration/coordination </label></td> 
                        </tr>
                        <tr>
                              <td  valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Boa_Chk)" styleId="pat_Boa_Chk" /></td> 
                              <td>                          <label class="normalText"for="pat_Boa_Chk">Brainstorming for additional<br> care management interventions to achieve<br>
                                                               transition to Hospice </label></td> 
                       </tr>
                     </table>
               </td>
           
               <td >

                  <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px">
                     <tr>
                              <td valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Partt_Chk)" styleId="pat_Partt_Chk" /></td>
                              <td>                         <label class="normalText"for="pat_Partt_Chk">More than 3 months participating in<br>the Program in severe level of care </label></td>
                     </tr>
                     <tr>

                               <td valign="top" width="1%" ><html:checkbox name="buildFormForm" property="value(pat_Othh_Chk)" styleId="pat_Othh_Chk" /></td>
                               <td>                         <label class="normalText"for="pat_Othh_Chk"> Other: Please be Specific </label></td>
                    </tr>
                  </table>
               </td>

               </tr>
             </table>
                 



            <table class="outerTable"  width="100%" cellspacing="0" cellpadding="0" style="border:0px">
                <tr>
                              <td colspan ="2" class="sectionTitleLightGrey"><span>MEDICATION </span> </td>
                 </tr>
                 <tr>
                              <td ><html:textarea name="buildFormForm" property="value(pat_Uno_Txt)" style="width:100%;height:60px" rows="1" /></td>
                </tr>
            </table>
           
           
           
            <table  class="outerTable"   width="100%" cellspacing="0" cellpadding="0" style="border:0px">
                <tr>
                              <td colspan="2" class="sectionTitleLightGrey"><span>CASE SUMMARY (Please included clinical, emotional, social status and interventions performed)</span></td>
               </tr>
               <tr>
                              <td><span class="normalText">Clinical status:</span><html:textarea name="buildFormForm" property="value(pat_Clss_Chk)" style="width:100%;height:60px" rows="1" /></td>
             </tr>
             <tr>
                              <td><span class="normalText">Emotional status:</span><html:textarea name="buildFormForm" property="value(pat_Ess_Chk)" style="width:100%;height:60px" rows="1" /> </td>
             </tr>
             <tr>
                              <td><span class="normalText">Social Status:</span> <html:textarea name="buildFormForm" property="value(pat_Sss_Chk)" style="width:100%;height:60px" rows="1" /> </td>
             </tr>
             <tr>
                              <td><span class="normalText">Interventions:</span><html:textarea name="buildFormForm" property="value(pat_Intr_Chk)" style="width:100%;height:60px" rows="1" /> </td>
             </tr>

            </table>
         </div>
     