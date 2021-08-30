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
<div class="forms">
	<table class="innerTable" border="1" width="100%" cellspacing="0" cellpadding="0" >
		<tr>
			<td colspan="2" class="sectionTitleLightGrey">
				<span class="boldText">ON CALL NOTE (NON - PATIENT RELATED) </span>
			</td>
		</tr>
		 <tr> 
	        	<td width="30%">
	        		<span class="boldText">Agency Name:</span>
                    <html:text name="buildFormForm" property="value(dhs_An_Txt)" size="40" />
                    &nbsp;&nbsp;
                    <span class="boldText">Time:</span>
                    <html:text name="buildFormForm" property="value(pan_Tn_Txt)" size="11" />
                    <html:img styleClass="datePicker" />
	        	</td>
	     </tr>
	      <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
	     </tr>
	     <tr>
	     		<td>
	     			<span class="boldText">Caller Name:</span>
	     			<html:text name="buildFormForm" property="value(dhs_Cn_Txt)" size="15" />
	     		</td>
	     </tr>
	      <tr>
			    <td colspan="2">
			        &nbsp;
			    </td>
	     	</tr>
	      <tr>
	     		<td colspan="2">
	     					<span class="boldText">Caller Phone Number:</span>
	     		 			<html:text name="buildFormForm" property="value(dhs_Cpn_Txt)" size="15" />
	     		</td>
	      </tr>
	       <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
	      </tr>
	      <tr>
			     <td>
			     	   <span class="boldText"> Reasons for Call:</span>
			           <html:textarea name="buildFormForm" property="value(pen_Rfc_Chk)" style="width:100%;height :60px" rows="1" /> 
			    </td>
		  </tr>
		   <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
	      </tr>
           <tr>
			      <td>
			     	   <span class="boldText"> Interventions:</span>
			           <html:textarea name="buildFormForm" property="value(pen_Intr_Chk)" style="width:100%;height:60px" rows="1" /> 
			    </td>
	      </tr>
	       <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
	      </tr>
	       <tr>
			      <td colspan="2">
			     	   <span class="boldText">Follow Up Needed:</span>
			     	   <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="1" styleId="pen_Off_Chk"/>
			     	   <label class="normalText"for="pen_Off_Chk"> Office:</label>
			     	   <a href="#" class="clearImg" onClick="return clearResetButtons('pen_Off_Chk');"></a>
			     	   <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="2" styleId="pen_Rcm_Chk"/>
			     	   <label class="normalText"for="pen_Rcm_Chk"> RN Case Manager:</label>
			     	   <a href="#" class="clearImg" onClick="return clearResetButtons('pen_Rcm_Chk');"></a>
			     	   <html:radio name="buildFormForm" property="value(pen_Rad1_Chk)" value="3" styleId="pen_Oim_Chk"/>
			     	   <label class="normalText"for="pen_Oim_Chk"> Other IDT Manager:</label>
			     	   <a href="#" class="clearImg" onClick="return clearResetButtons('pen_Oim_Chk');"></a>
			           <html:textarea name="buildFormForm" property="value(pen_Ltd_Chk)" style="width:100%;height:60px" rows="1" /> 
			     </td>
	      </tr>
	       <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
	      </tr>
	       </tr>
	       <tr>
			     <td>
			        <span class="boldText">FOR POST TRIAGE FOLLOW UP ONLY: </span>
			    </td>
	      </tr>
	      <tr>
			   <td colspan="2">
			   <html:radio name="buildFormForm" property="value(pen_Rad2_Chk)" value="4" styleId="pen_Rof_Chk"/>
			     <label class="normalText"for="pen_Rof_Chk"> Reviewed,no follow up needed:</label>
			   </td>
	      </tr>
	     <tr>
			 <td colspan="2">
			   <html:radio name="buildFormForm" property="value(pen_Rad2_Chk)" value="5" styleId="pen_Rsc_Chk"/>
			     <label class="normalText"for="pen_Rsc_Chk"> Reviewed, see comments below :</label>
			 </td>
	     </tr>
	      <tr>
			     <td colspan="2">
			       <html:textarea name="buildFormForm" property="value(pen_Ltdd_Chk)" style="width:100%;height:60px" rows="1" /> 
			    </td>
	      </tr>
	</table>
</div>
