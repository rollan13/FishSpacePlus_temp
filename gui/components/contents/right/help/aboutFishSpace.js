import React, { Component } from 'react';

export class AboutFishSpace extends Component {
	render() {
        return(
        	<div>
	        	<div className="about-ccres-content p-0">
		            <label className="font-size-4 black-text about-text">ABOUT Fish Space</label>
		        
		            <label className="font-size-1 help-text black-text">In  most  developing  coral  reef  countries,  marine  reserves  are  implemented  predominantly  as  a  fisheries  management  tool  to  help  fish  stocks  recover,  and  to  sustain  the  catch  of  fishers.  However,  most  coastal  planners  and  managers  have  difficulty  implementing  marine  reserve  designs  particularly  when  communities  that  are  largely  dependent  on  fisheries  are  going  to  be  highly  affected  by  certain  kinds  of  decisions.  Moreover,  most  planners  and  managers  have  difficulty  communicating  the  importance  of  marine  reserves  and  certain  fisheries  management  initiatives,  when  communities  do  not  see  tangible  the  benefits  of  such  decisions  in  a  short  period  of  time.  Our  goal,  as  part  of  the  CCRES  project,  was  to  develop  a  spatially  explicit  tool  to  address  these  challenges  to  support  decision-making,  which  we  hope  could  improve  the  design  and  implementation  of  marine  reserve  and  fisheries  management  initiatives. </label>
		            <label className="font-size-1 help-text black-text">The  Fisheries  for  Sustaining  People’s  Access  through  Conservation  and  Equitable  Systems  or  FishSPACE  is  a  spatially  explicit  fisheries  model  developed  to  support  decisions  on  the  design  of  no-take  marine  reserves  (NTMRs)  to  sustain  fisheries.  The  tool  allows  users  to  evaluate  alternative  decisions  on  marine  reserve  design  planning  by  describing  the  potential  benefits  (e.g.,  gains  in  fish  biomass,  sustained  catch  of  fishers)  and  consequences  (i.e.,  limiting  fishing  access)  of  such  decisions.  The  tool  can  also  help  users  explore  complementary  fisheries  management  decisions,  such  as  prescribing  catch  quotas  to  increase  the  effectiveness  of  NTMRs.</label>
		            <label className="font-size-1 help-text black-text">Fish  SPACE  has  two  parts:  a)  a  fish  population  sub-model  that  presents  changes  of  fish  biomass  based  on  the  coral  reef  area  and  condition,  ecological  processes,  and  fishing  activity;  and,  b)  a  fishing  sub-model  that  presents  the  effects  of  changing  fish  biomass  and  coral  reef  protection  on  the  distance  travelled  and  catch  of  fishers.    The  tool  requires  both  spatial  and  non-spatial  data  to  run.  The  spatial  data  (i.e.,  maps)  are  used  to  create  a  grid  with  uniformly  sized  cells  that  represents  a  particular  planning  region.  The  non-spatial  data  are  input  parameters  that  inform  the  kind  of  fish  stock  (e.g.,  groupers,  snappers)  and  level  of  fishing  activity.  Please  refer  to  the  Fish  SPACE  Spatial  Data  preparation  manual  for  instructions  and  tips  on  how  to  prepare  the  grid  files.</label>
		            <label className="font-size-1 help-text black-text">Fish  SPACE  was  developed  by  the  University  of  the  Philippines  Marine  Science  Institute  and  De  La  Salle  University  through  the  Marine  Environment  and  Resource  Foundation,  Incorporated.  The  development  of  the  model  and  software  was  lead  by  Vera  Horigue  and  Adrian  Chester  Balingit.  Other  members  of  the  model  development  team  included:  Patrick  Pata,  Miledel  Christine  Quibilan,  Cesar  Villanoy,  and  Porfirio  Aliño  of  the  Marine  Science  Institute,  and  Wilfredo  Licuanan  of  De  La  Salle  University.</label>
		            <label className="font-size-1 help-text black-text">To  cite  Fish  SPACE  (and  this  manual):  Horigue,  V.,  Balingit  A.C.,  Pata  P.R.,  Villanoy,  C.L.,  Quibilan,  M.C.,  Licuanan,  W.Y.,  and  Aliño,  P.M.  2018.  Fish  SPACE:  a  spatial  tool  for  marine  reserve  design  and  fisheries  management  [Computer  Software].  Capturing  Coral  Reefs  and  Related  Ecosystems  Project  (CCRES).  Quezon  City,  Philippines.  </label>
		            <label className="font-size-1 help-text black-text">
	                    <p>In summary, the “Fisheries for Sustaining People’s Access through Conservation and Equitable Systems” or Fish SPACE tool aims to:</p>
	                    <ul>
	                        <li>Support decisions on the design (i.e., location, number, and sizes) of marine reserves;</li> 
	                        <li>Allow users to explore alternative decisions on marine reserve planning by describing potential benefits and consequences of such decisions; and,</li>
	                        <li>Enable users to look into complementary decisions on fisheries management (e.g., prescribing catch quotas, reducing number of fishers) to increase effectiveness of marine reserves</li>
	                    </ul>
                    </label>
                    <label className="font-size-1 help-text black-text">
                    	<p>For enquiries, please contact:</p>
                    	<p>Prof. Cesar L. Villanoy – cesarv@msi.upd.edu.ph</p>
                    	<p>-and-</p>
                    	<p>Dr. Vera Horigue – vera.horigue@gmail.com</p>
                    </label>
		        </div>
		    </div>
		)
	}
}
