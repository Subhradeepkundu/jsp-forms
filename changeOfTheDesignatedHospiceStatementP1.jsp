<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
<%@ taglib uri="/tags/struts-tiles" prefix="tiles" %>


<div class="forms">
	<table class="innerTable" border="1" width="100%" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="2" class="sectionTitleLightGrey">
				<span class="boldText">Change of the Designated HospiceStatement</span>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<span class="normalText">An individual or representative may change, once in each election period, the designation of the particular hospice from which hospice care will be received. </span>
		   </td>
		</tr>
		<tr>
			<td colspan="2"> 
				&nbsp;
			</td>
		</tr>
         <tr>
		     <td colspan="2">
		     	<span class="normalText">The change of the designated hospice is not a revocation of the election for the period in which it is made.</span>
		     </td>
	    </tr>
	    <tr>
			<td colspan="2">
			    &nbsp;
			</td>
		</tr>
	     <tr>
	        <td colspan="2">
	        	<span class="normalText"> To change the designation of hospice programs, the individual or representative must file, with the hospice from which care has been received and with the newly designated hospice, a statement that includes the following information.</span>
	        </td>
	    </tr>
	    <tr>
			    <td colspan="2">
			        &nbsp;
			    </td>
		</tr>
	        <tr> 
	        	<td colspan="2">
	        		      <span class="boldText">PATIENT NAME:</span>
                    <html:text name="buildFormForm" property="value(dhs_Pn_Txt)" size="40" />
                    <span class="normalText">&nbsp;has received hospicecare from</span>
                    <span class="boldText">AGENCY NAME:</span>
                    <html:text name="buildFormForm" property="value(dhs_An_Txt)" size="40" />
	        	</td>
	         </tr>
	         <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
		    </tr>
	         <tr>
	        	<td colspan="2">
	        		<span class="boldText">PATIENT NAME:</span>
                    <html:text name="buildFormForm" property="value(dhs_Pnn_Txt)" size="40" /><span class="normalText">&nbsp;plans to receive hospice care from</span>
                     <html:text name="buildFormForm" property="value(dhs_Uno_Txt)" size="40" />
	        	</td>	
             </tr>
             <tr>
			     <td colspan="2">
			        &nbsp;
			     </td>
	     	</tr>
             <tr>
             	<td colspan="2">
                     <span class="normalText"> The date the change is to be effective is</span>
                       <html:text name="buildFormForm" property="value(pan_Ad_Txt)" size="11" />
                       <html:img styleClass="datePicker" />
             	</td>
             </tr>
             <tr>
			     <td colspan="2">
			        &nbsp;
			    </td>
	     	</tr>
		     <tr>
		   	   <td width="50%">   	
                    <html:text name="buildFormForm" property="value(dhs_Prn_Txt)" size="40" />
                </td>
                <td>   	
                   <html:text name="buildFormForm" property="value(dhs_Ds_Txt)" size="40" />
                </td>
          </tr>
           <tr>
           	     <td >
                    <span class="boldText">Patient/Representative Signature :</span>
                 </td>
                  <td>
                    <span class="boldText">Date Signed:</span>   
		   	   </td>
		   </tr>
		   <tr>
				<td colspan="2">
				   &nbsp;
			   </td>
		  </tr>
		   <tr>
		   	    <td>   	
                    <html:text name="buildFormForm" property="value(dhs_Ws_Txt)" size="40" />
                </td>
                <td>   	
                    <html:text name="buildFormForm" property="value(dhs_Dss_Txt)" size="40" />
                </td>
          </tr>
           <tr>
           	     <td>
                    <span class="boldText">Witness Signature :</span>
                 </td>
                  <td>
                    <span class="boldText">Date Signed:</span>   
		   	     </td>
		   </tr>
		   <tr>
				<td colspan="2">
				  &nbsp;
			   </td>
		  </tr>    
	</table>
</div>