<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
<%@ taglib uri="/tags/struts-tiles" prefix="tiles" %>

<div class="forms">
	<table class="innerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
		<tr>
			<td colspan="3" class="sectionTitleLightGrey">
				<span class="boldText">HOME OXYGEN RISK-ASSESSMENT </span>
			</td>
		</tr>
	</table>
</div>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr >
              <td>            
              	   <span class="normalText">PatientName:</span>
              	   <html:text name="buildFormForm" property="value(pan_Pn_Txt)" size="40" />
              </td>
               <td >
                        <span class="normalText">MRP:</span>
                        <html:text name="buildFormForm" property="value(pan_Mrp_Txt)" size="40" />
               </td>
                <td >
                        <span class="normalText">Date:</span>
                        <html:text name="buildFormForm" property="value(pan_Cpd_Txt)" size="11" />
                        <html:img styleClass="datePicker" />
               </td>
      </tr>
</table>
<table class="innerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
              <td width="10%">
                            <span class="normalText">(Key) Risk Score:Likelihood</span> 
              </td>
              <td width="30%" >
                     <table>
                            <tr>
                                 <td>
                                          <fieldset style="width: 200px;">
                                                 <span class="normalText"> 5= Certain</span> &nbsp;&nbsp; <span class="normalText">2= Unlikely</span><br>
                                                 <span class="normalText"> 4= Likely</span> &nbsp;&nbsp;  <span class="normalText">1= Rare</span><br>
                                                  <span class="normalText">  3= Possible </span> &nbsp;&nbsp;  <span class="normalText"> 0= N/A</span>
                                          </fieldset>
                                   </td>
                             <tr>
                       </table>
              </td>

               <td >
                     <table>
                            <tr>
                                   <td width="1%">
                                            <html:checkbox name="buildFormForm" property="value(pep_Soc_Chk)" styleId="pep_Soc_Chk" />
                                    </td>
                                    <td width="5%">
                                            <label class="normalText"for="pep_Soc_Chk"> Start of care </label>
                                    </td> 
                                    <td width="10%">
                                           <html:text name="buildFormForm" property="value(pan_Dat1_Txt)" size="11" />
                                       <html:img styleClass="datePicker" />
                                    </td>
                                    <td width="1%">
                                            <html:checkbox name="buildFormForm" property="value(pep_Roc_Chk)" styleId="pep_Roc_Chk" />
                                    </td>
                                    <td width="5%">
                                            <label class="normalText"for="pep_Roc_Chk"> Review of care </label>
                                    </td> 
                                    <td width="10%">
                                           <html:text name="buildFormForm" property="value(pan_Dat2_Txt)" size="11" />
                                       <html:img styleClass="datePicker" />
                                    </td>
                            </tr>

                            <tr>
                                    <td width="1%">
                                            <html:checkbox name="buildFormForm" property="value(pep_Rct_Chk)" styleId="pep_Rct_Chk" />
                                    </td>
                                     <td width="5%">
                                            <label class="normalText"for="pep_Rct_Chk"> Recert</label>
                                    </td>
                                    <td width="10%">
                                           <html:text name="buildFormForm" property="value(pan_Dat3_Txt)" size="11" />
                                       <html:img styleClass="datePicker" />
                                    </td>
                                    <td width="1%">
                                            <html:checkbox name="buildFormForm" property="value(pep_Prnr_Chk)" styleId="pep_Prnr_Chk" />
                                    </td>
                                     <td width="5%">
                                            <label class="normalText"for="pep_Prnr_Chk">PRN Reason:</label>
                                    </td>
                                    <td width="10%">
                                            <html:text name="buildFormForm" property="value(dhs_An_Txt)" size="40" />
                                    </td>         
                            </tr>

                     </table>
                </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="boldText"> #</span> 
           </td>
            <td valign="top" width="15%">
               <span class="boldText"> Hazards</span> 
           </td>
            <td valign="top" width="15%">
               <span class="boldText"> Risks</span> 
           </td>
            <td  valign="top" width="15%">
               <span class="boldText"> Score</span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
               <span class="boldText"> Is further action Required? (Y/N)<br>
                (If Score >3,answer Y: otherwise N   </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
               <span class="boldText">Actions<br>(Recommendation, Education Etc)</span> 
           </td>
           <td valign="top" width="15%" rowspan="3">
               <span class="boldText" >Response <br> A.) Will Correct <br> B.) Need more teaching <br>C.) Refuse </span>  
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> I.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">Smoking</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Fire <br> &bull;Facial Burns</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="0" styleId="pen_zero_Chk"/>
                     <label class="normalText"for="pen_zero_Chk"> 0</label><br>
                      <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="1" styleId="pen_one_Chk"/>
                     <label class="normalText"for="pen_one_Chk"> 1</label><br>
                      <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="2" styleId="pen_two_Chk"/>
                     <label class="normalText"for="pen_two_Chk"> 2</label><br>
                      <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="3" styleId="pen_three_Chk"/>
                     <label class="normalText"for="pen_three_Chk"> 3</label><br>
                      <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="4" styleId="pen_four_Chk"/>
                     <label class="normalText"for="pen_four_Chk"> 4</label><br>
                      <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="5" styleId="pen_fifth_Chk"/>
                     <label class="normalText"for="pen_fifth_Chk"> 5</label>
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad2_Chk)" value="6" styleId="pen_ys0_Chk"/>
                     <label class="normalText"for="pen_ys0_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad2_Chk)" value="7" styleId="pen_no0_Chk"/>
                     <label class="normalText"for="pen_no0_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dly_Chk)" styleId="pep_Dly_Chk" />
                    <label class="normalText"for="pep_Dly_Chk">Instruct patients, caregivers and visitors not to smoke in any part of the house where oxygen is used</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss_Chk)" styleId="pep_Pnss_Chk" />
                    <label class="normalText"for="pep_Pnss_Chk">Post No Smoking sign where oxygen is used</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Oeq_Chk)" styleId="pep_Oeq_Chk" />
                    <label class="normalText"for="pep_Oeq_Chk"> Arrange for removal of any oxygen equipment not in regular use</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Oep_Chk)" styleId="pep_Oep_Chk" />
                    <label class="normalText"for="pep_Oep_Chk"> Fire breaks never to be removed from tubing supplied by oxygen provider</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Esd_Chk)" styleId="pep_Esd_Chk" />
                    <label class="normalText"for="pep_Esd_Chk">  Ensure smoke detectors are fitted and in working order</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad3_Chk)" value="8" styleId="pen_Ab_Chk"/>
                     <label class="normalText"for="pen_Ab_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad3_Chk)" value="9" styleId="pen_Bb_Chk"/>
                     <label class="normalText"for="pen_Bb_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad3_Chk)" value="10" styleId="pen_Cb_Chk"/>
                     <label class="normalText"for="pen_Cb_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> II.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">No working smoke alarms/ fire extinguisher</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Fire</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad4_Chk)" value="11" styleId="pen_ys1_Chk"/>
                     <label class="normalText"for="pen_ys1_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad4_Chk)" value="12" styleId="pen_no1_Chk"/>
                     <label class="normalText"for="pen_no1_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy_Chk)" styleId="pep_Dlyy_Chk" />
                    <label class="normalText"for="pep_Dlyy_Chk">To install working smoke alarms and check battery periodically</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnsss_Chk)" styleId="pep_Pnsss_Chk" />
                    <label class="normalText"for="pep_Pnsss_Chk"> To have a fire extinguisher and have professional</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad5_Chk)" value="13" styleId="pen_Ac_Chk"/>
                     <label class="normalText"for="pen_Ac_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad5_Chk)" value="14" styleId="pen_Bc_Chk"/>
                     <label class="normalText"for="pen_Bc_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad5_Chk)" value="15" styleId="pen_Cc_Chk"/>
                     <label class="normalText"for="pen_Cc_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> III.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">  Exposure to naked flamesfrom open gas/gas fires/candles and cooking appliances</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Explosion and Fire</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An2_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad6_Chk)" value="16" styleId="pen_ys2_Chk"/>
                     <label class="normalText"for="pen_ys2_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad6_Chk)" value="17" styleId="pen_no2_Chk"/>
                     <label class="normalText"for="pen_no2_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyym_Chk)" styleId="pep_Dlyym_Chk" />
                    <label class="normalText"for="pep_Dlyym_Chk">Advise patient to maintain a safe distant from fires and naked flame appliances as instructed by oxygen provider battery periodically</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnssm_Chk)" styleId="pep_Pnssm_Chk" />
                    <label class="normalText"for="pep_Pnssm_Chk"> Oxygen must be positioned and stored as directed by oxvygen provider</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad7_Chk)" value="18" styleId="pen_Ad_Chk"/>
                     <label class="normalText"for="pen_Ad_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad7_Chk)" value="19" styleId="pen_Bd_Chk"/>
                     <label class="normalText"for="pen_Bd_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad7_Chk)" value="20" styleId="pen_Cd_Chk"/>
                     <label class="normalText"for="pen_Cd_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> IV.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                       Use of oil base emollients
              </span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Local burning of affected area</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An3_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad8_Chk)" value="21" styleId="pen_ys3_Chk"/>
                     <label class="normalText"for="pen_ys3_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad8_Chk)" value="22" styleId="pen_no3_Chk"/>
                     <label class="normalText"for="pen_no3_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy3_Chk)" styleId="pep_Dlyy3_Chk" />
                    <label class="normalText"for="pep_Dlyy3_Chk">  Instruct patients or caregivers not to use oil based emollients on patients nostrils
                   </label><br>
                    
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad9_Chk)" value="23" styleId="pen_Ae_Chk"/>
                     <label class="normalText"for="pen_Ae_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad9_Chk)" value="24" styleId="pen_Be_Chk"/>
                     <label class="normalText"for="pen_Be_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad9_Chk)" value="25" styleId="pen_Ce_Chk"/>
                     <label class="normalText"for="pen_Ce_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> V.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                      Kinking or entrapment of tubing in/under furniture, doors, wheels
              </span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Restrictions of or no oxygen supply</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An4_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad10_Chk)" value="26" styleId="pen_ys4_Chk"/>
                     <label class="normalText"for="pen_ys4_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad10_Chk)" value="27" styleId="pen_no4_Chk"/>
                     <label class="normalText"for="pen_no4_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy4_Chk)" styleId="pep_Dlyy4_Chk" />
                    <label class="normalText"for="pep_Dlyy4_Chk">Check there are no kinks in the tubing
                   </label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss4_Chk)" styleId="pep_Pnss4_Chk" />
                    <label class="normalText"for="pep_Pnss4_Chk"> Check that the tubing is not trapped between furniture or trapped e.g under bed wheels</label><br>
                    <html:checkbox name="buildFormForm" property="value(pep_Pnss5_Chk)" styleId="pep_Pnss5_Chk" />
                    <label class="normalText"for="pep_Pnss5_Chk">Only tubing supplied by the oxygen provider is to be used on cylinders and concentrators</label><br>
                    <html:checkbox name="buildFormForm" property="value(pep_Pnss6_Chk)" styleId="pep_Pnss6_Chk" />
                    <label class="normalText"for="pep_Pnss6_Chk">Encourage piped oxygen if there is excessive tubing</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad11_Chk)" value="28" styleId="pen_Af_Chk"/>
                     <label class="normalText"for="pen_Af_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad11_Chk)" value="29" styleId="pen_Be_Chk"/>
                     <label class="normalText"for="pen_Bf_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad11_Chk)" value="30" styleId="pen_Cf_Chk"/>
                     <label class="normalText"for="pen_Cf_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> VI.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                       Tubing
              </span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Trips and falls</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An5_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad12_Chk)" value="31" styleId="pen_ys5_Chk"/>
                     <label class="normalText"for="pen_ys5_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad12_Chk)" value="32" styleId="pen_no5_Chk"/>
                     <label class="normalText"for="pen_no5_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy5_Chk)" styleId="pep_Dlyy5_Chk" />
                    <label class="normalText"for="pep_Dlyy5_Chk"> AdVise patients and caregivers to check position of tubing daily to minimize risks of falls
                   </label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss7_Chk)" styleId="pep_Pnss7_Chk" />
                    <label class="normalText"for="pep_Pnss7_Chk">Current oxygen tubing must be of an appropriate length to meet the needs of the patient, and If needed contact oxygen provider to alter the tubing length</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad13_Chk)" value="33" styleId="pen_Ag_Chk"/>
                     <label class="normalText"for="pen_Ag_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad13_Chk)" value="34" styleId="pen_Bg_Chk"/>
                     <label class="normalText"for="pen_Bg_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad13_Chk)" value="35" styleId="pen_Cg_Chk"/>
                     <label class="normalText"for="pen_Cg_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr >
              <td>            
                        <span class="normalText">PatientName:</span>
                        <html:text name="buildFormForm" property="value(pan_Ppn_Txt)" size="40" />
              </td>
               <td >
                        <span class="normalText">MRP:</span>
                        <html:text name="buildFormForm" property="value(pan_Mrpp_Txt)" size="40" />
               </td>
                <td >
                        <span class="normalText">Date:</span>
                        <html:text name="buildFormForm" property="value(pan_Cpdd_Txt)" size="11" />
                        <html:img styleClass="datePicker" />
               </td>
      </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="boldText"> #</span> 
           </td>
            <td valign="top" width="15%">
               <span class="boldText"> Hazards</span> 
           </td>
            <td valign="top" width="15%">
               <span class="boldText"> Risks</span> 
           </td>
            <td  valign="top" width="15%">
               <span class="boldText"> Score</span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
               <span class="boldText"> Is further action Required? (Y/N)<br>
                (If Score >3,answer Y: otherwise N   </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
               <span class="boldText">Actions<br>(Recommendation, Education Etc)</span> 
           </td>
           <td valign="top" width="15%" rowspan="3">
               <span class="boldText" >Response <br> A.) Will Correct <br> B.) Need more teaching <br>C.) Refuse </span>  
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> VII.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                       Patient/ Caregivers not aware on how to obtain replacement cylinders</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Running out of oxygen</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An6_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad14_Chk)" value="36" styleId="pen_ys6_Chk"/>
                     <label class="normalText"for="pen_ys6_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad14_Chk)" value="37" styleId="pen_no6_Chk"/>
                     <label class="normalText"for="pen_no6_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy6_Chk)" styleId="pep_Dlyy6_Chk" />
                    <label class="normalText"for="pep_Dlyy6_Chk">Ensure patient has information leaflet from company supplying oxygen
                   </label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss8_Chk)" styleId="pep_Pnss8_Chk" />
                    <label class="normalText"for="pep_Pnss8_Chk">Check patient/ caregiver has contact details on how to obtain/ replace oxygen cylinder</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad15_Chk)" value="38" styleId="pen_Ah_Chk"/>
                     <label class="normalText"for="pen_Ah_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad15_Chk)" value="39" styleId="pen_Bh_Chk"/>
                     <label class="normalText"for="pen_Bh_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad15_Chk)" value="40" styleId="pen_Ch_Chk"/>
                     <label class="normalText"for="pen_Ch_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> VIII.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                      Power supply cut off toconcentrator
              </span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull; No oxygen supply</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An7_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad16_Chk)" value="41" styleId="pen_ys7_Chk"/>
                     <label class="normalText"for="pen_ys7_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad16_Chk)" value="42" styleId="pen_no7_Chk"/>
                     <label class="normalText"for="pen_no7_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy7_Chk)" styleId="pep_Dlyy7_Chk" />
                    <label class="normalText"for="pep_Dlyy7_Chk"> Check patient has a backup cylinder
                   </label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss9_Chk)" styleId="pep_Pnss9_Chk" />
                    <label class="normalText"for="pep_Pnss9_Chk">' Educate patient not to use backup cylinder unless there is power failure to the concentrator</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad17_Chk)" value="43" styleId="pen_Ai_Chk"/>
                     <label class="normalText"for="pen_Ai_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad17_Chk)" value="44" styleId="pen_Bi_Chk"/>
                     <label class="normalText"for="pen_Bi_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad17_Chk)" value="45" styleId="pen_Ci_Chk"/>
                     <label class="normalText"for="pen_Ci_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> IX.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                      Non Compliance with oxygen prescription. (Such as unauthorized adjustment of flow rateon oxygen equipment,discontinue it withoUt,physician order, etc.)
              </span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Worsening respiratory failure in oxygen sensitive patients<br>
               &bull; Hypoxia remains untreated</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An8_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad18_Chk)" value="46" styleId="pen_ys8_Chk"/>
                     <label class="normalText"for="pen_ys8_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad18_Chk)" value="47" styleId="pen_no8_Chk"/>
                     <label class="normalText"for="pen_no8_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy9_Chk)" styleId="pep_Dlyy9_Chk" />
                    <label class="normalText"for="pep_Dlyy9_Chk"> Educate patient/ significant caregivers/ family on the reason for oxygen

                   </label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss11_Chk)" styleId="pep_Pnss11_Chk" />
                    <label class="normalText"for="pep_Pnss11_Chk">Inform patient/ caregiver when, how to use oxygen and the prescribed flow rate and hours of use</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss12_Chk)" styleId="pep_Pnss12_Chk" />
                    <label class="normalText"for="pep_Pnss12_Chk">Ensure patient/ caregiver understands how to operate equipment safely</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad19_Chk)" value="48" styleId="pen_Aj_Chk"/>
                     <label class="normalText"for="pen_Aj_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad19_Chk)" value="49" styleId="pen_Bj_Chk"/>
                     <label class="normalText"for="pen_Bj_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad19_Chk)" value="50" styleId="pen_Cj_Chk"/>
                     <label class="normalText"for="pen_Cj_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
            <td valign="top" width="5%">
                <span class="normalText"> X.</span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText">
                       Non-compliance with assessment and/or review process
              </span> 
           </td>
            <td valign="top" width="15%">
               <span class="normalText"> &bull;Risks will not be identified or managed<br>
               &bull;Oxygen prescription may not be appropriate for the patients clinical need</span> 
           </td>
            <td  valign="top" width="15%" rowspan="5">
               <span class="normalText">  
                     <html:text name="buildFormForm" property="value(dhs_An9_Txt)" size="40" />
              </span> 
           </td>
            <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad20_Chk)" value="51" styleId="pen_ys9_Chk"/>
                     <label class="normalText"for="pen_ys9_Chk"> yes</label>
                     <html:radio name="buildFormForm" property="value(pen_Rad20_Chk)" value="52" styleId="pen_no9_Chk"/>
                     <label class="normalText"for="pen_no9_Chk"> no</label>        
           </td>
            <td valign="top" width="15%" rowspan="4">
                    <html:checkbox name="buildFormForm" property="value(pep_Dlyy10_Chk)" styleId="pep_Dlyy10_Chk" />
                    <label class="normalText"for="pep_Dlyy10_Chk"> All except terminally ill patients should be formally assessed prior commencing oXygen therapy
                   </label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss13_Chk)" styleId="pep_Pnss13_Chk" />
                    <label class="normalText"for="pep_Pnss13_Chk">Patient will be recalled for review according to national guidance</label><br>
                     <html:checkbox name="buildFormForm" property="value(pep_Pnss14_Chk)" styleId="pep_Pnss14_Chk" />
                    <label class="normalText"for="pep_Pnss14_Chk">Assessment and review will be undertaken at a mutually convenient time and place.</label><br>
           </td>
           <td valign="top" width="15%" rowspan="3">
                     <html:radio name="buildFormForm" property="value(pen_Rad21_Chk)" value="53" styleId="pen_Ak_Chk"/>
                     <label class="normalText"for="pen_Ak_Chk"> A</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad21_Chk)" value="54" styleId="pen_Bk_Chk"/>
                     <label class="normalText"for="pen_Bk_Chk"> B</label><br>
                     <html:radio name="buildFormForm" property="value(pen_Rad21_Chk)" value="55" styleId="pen_Ck_Chk"/>
                     <label class="normalText"for="pen_Ck_Chk"> C</label>       
           </td>
       </tr>
</table>
<table class="outerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
       <tr>
              <td width="50%">
                  <span class="boldText">Staff's name:</span>
                  <html:text name="buildFormForm" property="value(dhs_Sn_Txt)" size="40" />     
              </td>
                <td>
                    <span class="boldText">Assessment Date:</span>
                    <html:text name="buildFormForm" property="value(pan_Tn_Txt)" size="11" />
                    <html:img styleClass="datePicker" />
              </td>
       </tr>
       <tr>
              <td>
                  <span class="boldText">Staff's Signature:</span>
                  <html:text name="buildFormForm" property="value(dhs_Ss_Txt)" size="40" />     
              </td>
                <td>
                  <span class="boldText">Patient's Signature:</span>
                  <html:text name="buildFormForm" property="value(dhs_Ss_Txt)" size="40" />   
              </td>
       </tr>
</table>
</div>

                     

