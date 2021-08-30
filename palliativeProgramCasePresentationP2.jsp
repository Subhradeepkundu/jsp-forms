<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %>
<%@ taglib uri="/tags/struts-logic" prefix="logic" %>
<%@ page import="com.hhsos.Constants" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Calendar" %>
<%@ page import="java.text.SimpleDateFormat" %>

<%@include file="/WEB-INF/jsp/includes/TimeInOut.jsp"%>

<table width="100%" class="mainGrid">
 	<tr>
 		<td class="sectionHead" align="center" colspan="2"><span class="label">DEMOGRAPHICS AND PATIENT HISTORY</span></td>
 	</tr>
  	<tr>
 		<td width="50%" valign="top">
 		  <table width="100%">
 		    <tr>
 		      <td width="25%">
 		        <span class="mainBoldText">PATIENT NAME:</span>
 		      </td>
 		      <td width="75%">
 		        (First) <html:text name="buildFormForm" property="value(M0040FirstName)" readonly="true" size="16" />
 		        (Last) <html:text name="buildFormForm" property="value(M0040LastName)" readonly="true" size="16" />
 		        <span style="margin-left:10px;"></span>
 		        <html:radio property="value(Gender)" value="1" disabled="true"/>Male
		        <html:radio property="value(Gender)" value="2" disabled="true"/>Female
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>
 		        <span class="mainBoldText">PATIENT ADDRESS:</span>
 		      </td>
 		      <td>
 		      Street:
 		        <html:text name="buildFormForm" property="value(M0040Address)" readonly="true" size="30" />
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>&nbsp;</td>
 		      <td>
 		      City: 
 		            <html:text name="buildFormForm" property="value(M0040City)" readonly="true" size="16" />
 		        State:
	                <html:text name="buildFormForm" property="value(M0050)" readonly="true" size="2"/>
	             Zip Code:
					<html:text name="buildFormForm" property="value(M0060ZipCode)" readonly="true" size="10" />
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>
 		        <span class="mainBoldText">DATE OF BIRTH:</span>
 		      </td>
 		      <td>
 		        <html:text name="buildFormForm" property="value(M0066BirthDate)" readonly="true" size="20" />
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>
 		        <span class="mainBoldText">MR NUMBER:</span>
 		      </td>
 		      <td>
 		        <html:text name="buildFormForm" property="value(MedicalRecordNo)" readonly="true" size="10" />
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>
 		        <span class="mainBoldText">SOC DATE:</span>
 		      </td>
 		      <td>
 		        <html:text name="buildFormForm" property="value(FirstVisitDate)" readonly="true" size="10" />
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>
 		        <span class="mainBoldText">CERTIFICATION PERIOD:</span>
 		      </td>
 		      <td>
 		        From&nbsp;
			<html:text name="buildFormForm" property="value(EpisodeStartDate)" size="10" maxlength="20" readonly="true"/>&nbsp;&nbsp;To&nbsp;
			<% String endDate = " "; %>
				<logic:present name="buildFormForm" property="value(EpisodeStartDate)" >
				   <bean:define name="buildFormForm" property="value(EpisodeStartDate)" id="episodeStartDate" />
					<%
						try {
							Date d = Constants.DATE_FORMAT.parse( episodeStartDate.toString() );
							Calendar cal = Calendar.getInstance();
							cal.setTime(d);
							cal.add(Calendar.DATE, 59);
							SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
							endDate = sdf.format(cal.getTime());
						   } catch (java.text.ParseException e) {}
					 %>
				</logic:present>
			<html:text name="buildFormForm" property="value(CertificationToDate)" value="<%= endDate %>" size="10" maxlength="20" readonly="true"/>
 		      </td>
 		    </tr>
 		    <tr>
 		      <td>
 		        <span class="mainBoldText">HEALTH INSURANCE CLAIM #:</span>
 		      </td>
 		      <td>
 		        <html:text name="buildFormForm" property="value(HIClaimNo)" readonly="true" size="10" />
 		      </td>
 		    </tr>
 		    </table>
 		    <hr>
 		    <table width="100%">
 		    <tr>
 		      <td>
 				<span class="mainBoldText">PHYSICIAN DATE LAST CONTACTED:</span>
       			<html:text name="buildFormForm" size="16" property="value(PhysDateCont)"  onblur="validateDate(this)" />
      			<html:img styleClass="datePicker" />
      		  </td>
      		</tr>
      		<tr>
      		  <td>
      			<span class="mainBoldText">PHYSICIAN DATE LAST VISITED:</span> 
      			<html:text name="buildFormForm" size="16" property="value(PhysDateLastVisit)" onblur="validateDate(this)" />
      			<html:img styleClass="datePicker" />
      		  </td>
      		</tr>
      		<tr>
      		  <td>
      			<span class="mainBoldText">PRIMARY REASON FOR HOME HEALTH:</span><br>
      		    <html:checkbox name="buildFormForm" property="value(PrimReasontotreatP)" />
      		    To treat patient illness or injury due to the inherent complexity of the service and the condition of the patient.<br>
      			<html:checkbox name="buildFormForm" property="value(PrimReasonHH1n)" />
				Other:<br>
				<html:textarea name="buildFormForm" property="value(PrimReasonHH)" rows="2" style="width: 80%;"/>
              </td>
            </tr>
           </table>
          </td>
          <td width="50%" valign="top">
            <table width="100%">
    			<tr>
    			  <td colspan="3" align ="left">
    				<span class="mainBoldText">PERTINENT HISTORY AND/OR PREVIOUS OUTCOMES <br>&nbsp;&nbsp;(note dates of onset, exacerbation when known)</span><br>
    				</td>
    			</tr>
    			<tr>
    				<td><html:checkbox name="buildFormForm" property="value(PhysHyper)" />Hypertension </td>
    				<td><html:checkbox name="buildFormForm" property="value(PhysCardiac)"/>Cardiac </td>
     				<td><html:checkbox name="buildFormForm" property="value(PhysDiabetes)" />Diabetes</td>
     			</tr>
			    <tr>
				     <td><html:checkbox name="buildFormForm" property="value(PhysResp)" />Respiratory </td>
				     <td><html:checkbox name="buildFormForm" property="value(PhysOst)" />Osteoporosis</td>
				     <td><html:checkbox name="buildFormForm" property="value(PhysFractures)" />Fractures</td>
			    </tr>
			    <tr>
			    	<td><html:checkbox name="buildFormForm" property="value(PhysCancer)" />Cancer (site: <html:text name="buildFormForm" property="value(PhysCancerText)" size="7"/> )</td>
			        <td><html:checkbox name="buildFormForm" property="value(PhysInfection)" />Infection</td>
			     	<td><html:checkbox name="buildFormForm" property="value(PhysImm)" />Immunosuppressed</td>
			     </tr>
			     <tr>
			     	<td><html:checkbox name="buildFormForm" property="value(PhysOpenWound)" />Open Wound</td>
			      	<td><html:checkbox name="buildFormForm" property="value(PhysSurgeries)" />Surgeries&nbsp;<html:text name="buildFormForm" property="value(PhysSurgeriesText)" size="10"/></td>
			      	<td><html:checkbox name="buildFormForm" property="value(PhysOther)" />Other (specify)&nbsp;<html:text name="buildFormForm" property="value(PhysOtherText)" size="10"/></td>    
    			 </tr>
    		  </table>
    		  <table width="100%">
    		    <tr>
    		      <td>
    		        <span class="mainBoldText">PRIOR HOSPITALIZATIONS</span>
    		      </td>
    		    </tr>
    		    <tr>
      			  <td>
      			     <html:radio name="buildFormForm" property="value(PriorHosp)" value="0" />No&nbsp;
      				 <html:radio name="buildFormForm" property="value(PriorHosp)" value="1" />Yes&nbsp;&nbsp;
      				<a href="#" class="clearImg" onClick="return clearResetButtons('PriorHosp');">Clear</a>&nbsp;&nbsp;
      				Number of times&nbsp;<html:text name="buildFormForm" property="value(PhysNumOfTimes)" size="5"/>&nbsp;
      				Reason(s)/Date(s):&nbsp;<html:text name="buildFormForm" property="value(PhysReasonsDates)" size="20"/>
      			  </td>
      			</tr>
      		</table>  
      		<table width="100%">
      		  <tr>
      		    <td>
 				  <span class="mainBoldText">IMMUNIZATIONS</span>
     				<html:checkbox name="buildFormForm" property="value(PhysUpToDate)" />Up to date
     			</td>
     		  </tr>
     		  <tr>
     		    <td>
     				Needs:&nbsp;&nbsp;
     				<html:checkbox name="buildFormForm" property="value(PhysInfluenza)" />Influenza&nbsp;
     				<html:checkbox name="buildFormForm" property="value(PhysPneumonia)" />Pneumonia&nbsp;
     				<html:checkbox name="buildFormForm" property="value(PhysTetanus)" />Tetanus&nbsp;
     				<html:checkbox name="buildFormForm" property="value(PhysImmOther)" />Other&nbsp;<html:text name="buildFormForm" property="value(PhysImmOtherText)" size="10"/>
     			</td>
     		</tr>
     	</table>
     	
     	<%@include file="/WEB-INF/jsp/includes/Allergies.jsp" %>
 				           
          </td>
       </tr>
 </table>
 <table width="100%" class="innerGrid">
 	<tr>
 		<td class="sectionHead" align="center" colspan="2"><span class="label">PROGNOSIS</span></td>
 	</tr>
 	<tr>
 	  <td>
 	    <%@include file="/WEB-INF/jsp/includes/Prognosis.jsp" %>
 	  </td>
 	</tr>
</table>
<table width="100%" class="innerGrid">
 	<tr>
 		<td><span class="label">ADVANCED DIRECTIVES</span></td>
 	</tr>
 	<tr>
 	  <td>
 	    <html:checkbox name="buildFormForm" property="value(Resuscitate)" />Do not resuscitate&nbsp;&nbsp;
 	    <html:checkbox name="buildFormForm" property="value(OrganDonor)" />Organ Donor
 	  </td>
 	</tr>
    <tr>
      <td>
    	<html:checkbox name="buildFormForm" property="value(EducationNeeded)" />Education needed&nbsp;&nbsp;
    	<html:checkbox name="buildFormForm" property="value(CopiesOnFile)" />Copies on file
      </td>
    </tr>
    <tr>
      <td>
        <html:checkbox name="buildFormForm" property="value(FuneralArrangements)" />Funeral arrangements made&nbsp;&nbsp;
        <html:checkbox name="buildFormForm" property="value(DPOA)" />Durable Power of Attorney (DPOA)
      </td>
    </tr>
    <tr>
      <td>
        <html:checkbox name="buildFormForm" property="value(LivingWillp)" />Living Will
      </td>
   </tr>
   <tr>
     <td>
       <span class="mainBoldText">Patient/Family informed:</span>&nbsp;
      	<html:radio name="buildFormForm" property="value(FamilyInformed)" value="1"/>Yes&nbsp;
        <html:radio name="buildFormForm" property="value(FamilyInformed)" value="0"/>No
      	<span class="mainBoldText">(If No, please explain.)</span>&nbsp;
      <a href="#" class="clearImg" onClick="return clearResetButtons('FamilyInformed');">Clear</a>&nbsp;&nbsp;
       <html:text name="buildFormForm" property="value(FamilyInformedText)" size="30"/>
 </table>
 
 <table width="100%" class="mainGrid">
 	<tr>
 		<td class="sectionHead" align="center" colspan="2"><span class="label">SAFETY</span></td>
 	</tr>
 	<tr>
 	  <td width="50%" valign="top">
 	    <%@include file="/WEB-INF/jsp/includes/SafetyMeasure.jsp" %>
 	  </td>
 	  <td width="50%" valign="top">
 	    <table width="100%">
  			<tr>
  			  <td>
  			    <span class="mainBoldText">Emergency planning/fire safety:</span>
  			   </td>
  			</tr>
   			<tr>
    		  <td width="50%">
    			Fire extinguisher
    		  </td>
    		  <td width="50%">
    			<html:radio name="buildFormForm" property="value(Yes1p)" value="1"/>Y&nbsp;
      			<html:radio name="buildFormForm" property="value(Yes1p)" value="0"/>N&nbsp;&nbsp;
      			<a href="#" class="clearImg" onClick="return clearResetButtons('Yes1p');">Clear</a>
    		</td>
  		  </tr>
  		  <tr>
    		<td>
    			Smoke detectors on all levels of home
    		</td>
    		<td>
    			<html:radio name="buildFormForm" property="value(Yes2p)" value="1"/>Y&nbsp;
      			<html:radio name="buildFormForm" property="value(Yes2p)" value="0"/>N&nbsp;&nbsp;
      			<a href="#" class="clearImg" onClick="return clearResetButtons('Yes2p');">Clear</a>
    		</td>
  		</tr>
  		<tr>
    		<td>
    			Tested and functioning
    		</td>
    		<td>
    			<html:radio name="buildFormForm" property="value(Yes3p)" value="1"/>Y&nbsp;
      			<html:radio name="buildFormForm" property="value(Yes3p)" value="0"/>N&nbsp;&nbsp;
      			<a href="#" class="clearImg" onClick="return clearResetButtons('Yes3p');">Clear</a>
    		</td>
  		</tr>
  		<tr>
    		<td>
    			More than one exit
    		</td>
    		<td>
    			<html:radio name="buildFormForm" property="value(Yes4p)" value="1"/>Y&nbsp;
      			<html:radio name="buildFormForm" property="value(Yes4p)" value="0"/>N&nbsp;&nbsp;
      			<a href="#" class="clearImg" onClick="return clearResetButtons('Yes4p');">Clear</a>
    		</td>
  		</tr>
  		<tr>
    		<td>
    			Plan for exit
    		</td>
    		<td>
    			<html:radio name="buildFormForm" property="value(Yes5p)" value="1"/>Y&nbsp;
      			<html:radio name="buildFormForm" property="value(Yes5p)" value="0"/>N&nbsp;&nbsp;
      			<a href="#" class="clearImg" onClick="return clearResetButtons('Yes5p');">Clear</a>
    		</td>
  </tr>
  <tr>
    <td>
    	Plan for power failure
    </td>
    <td>
    	<html:radio name="buildFormForm" property="value(Yes6p)" value="1"/>Y&nbsp;
        <html:radio name="buildFormForm" property="value(Yes6p)" value="0"/>N&nbsp;&nbsp;
      	<a href="#" class="clearImg" onClick="return clearResetButtons('Yes6p');">Clear</a>
    </td>
  </tr>
  <tr>
  	<td colspan="2">
  	 <span class="mainBoldText">Oxygen use:</span>
  	</td>
  </tr>
  <tr>
    <td>
    	Signs posted
    </td>
    <td>
    	<html:radio name="buildFormForm" property="value(Yes7p)" value="1"/>Y&nbsp;
      	<html:radio name="buildFormForm" property="value(Yes7p)" value="0"/>N&nbsp;&nbsp;
      <a href="#" class="clearImg" onClick="return clearResetButtons('Yes7p');">Clear</a>
    </td>
  </tr>
  <tr>
    <td>
    	Handles smoking / flammables safely
    </td>
    <td>
    	<html:radio name="buildFormForm" property="value(Yes8p)" value="1"/>Y&nbsp;
      	<html:radio name="buildFormForm" property="value(Yes8p)" value="0"/>N&nbsp;&nbsp;
      <a href="#" class="clearImg" onClick="return clearResetButtons('Yes8p');">Clear</a>
    </td>
  </tr>
  <tr>
    <td colspan="2">
   		<span class="mainBoldText"> Oxygen back-up:</span>
   	</td>
  </tr>
  <tr>
   <td colspan="2">
   	<html:checkbox name="buildFormForm" property="value(Avai9p)" />
   	 <span class="text">Available</span>&nbsp;&nbsp;
   	 <html:checkbox name="buildFormForm" property="value(Knows9p)" />
      <span class="text">Knows how to use</span>&nbsp;&nbsp;
      <html:checkbox name="buildFormForm" property="value(ElectfireSafety9p)" />
      <span class="text">Electrical / fire safety</span>
   	</td>
  </tr>
  <tr>
    <td colspan="2">
      <span class="mainBoldText">SAFETY HAZARDS</span>
      <span class="text">found in the patient's current place of residence:</span>
     <span class="mainBoldText">(Mark all that apply.)</span>
   </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsNone)" />
      	<span class="text">None</span>
    </td>
    <td>
    	<html:checkbox name="buildFormForm" property="value(Unsoundstructp)" />
        <span class="text">Unsound structure</span>
    </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsInadequateFloor)" />
      	<span class="text">Inadequate floor, roof, or windows</span>
    </td>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsUnsafePlacement)" />
      	<span class="text">Unsafe placement of rugs/cords furniture</span>
    </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsInadequateLighting)"/>
      	<span class="text">Inadequate lighting</span>
    </td>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsUnsafeFunctional)" />
      	<span class="text">Unsafe functional barriers (i.e., stairs)</span>
    </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(Nophoneorunableuse)"/>
      	<span class="text">No telephone available and / or unable to use phone</span>
    </td>
    <td>
    	<html:checkbox name="buildFormForm" property="value(Unsafestorageequipsupp)" />
		<span class="text">Unsafe storage of supplies / equipment</span>
    </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsUnsafeGas)" />
      	<span class="text">Unsafe gas/electrical appliances/outlets</span>
    </td>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsImproperlyStored)" />
      	<span class="text">Improperly stored hazardous materials</span>
    </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsInadequateHeating)" />
      	<span class="text">Inadequate heating/cooling/electricity</span>
    </td>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsOther)" />
      	<span class="text">Other (specify)</span>
      	<html:text name="buildFormForm" property="value(SafetyHazardsOtherText)" size="30"/>
    </td>
  </tr>
  <tr>
    <td>
    	<html:checkbox name="buildFormForm" property="value(SafetyHazardsInadequateSanitation)" />
      	<span class="text">Inadequate sanitation/plumbing</span>
    </td>
  </tr>
  
  
</table>
 	  </td>
 	</tr>
</table>
 	