import React from 'react'
import {MdOutlineFastfood} from "react-icons/md"

function Leaderboard() {
  return (
    <>
    <MdOutlineFastfood/>
    <table>
<tbody>
<tr>
<td>&nbsp;Name</td>
<td>Location</td>
<td>Score&nbsp;</td>
</tr>
<tr>
<td>&nbsp;Tom</td>
<td>&nbsp;New York</td>
<td>&nbsp;23</td>
</tr>
<tr>
<td>Dave&nbsp;</td>
<td>Pennsylvania&nbsp;</td>
<td>22&nbsp;</td>
</tr>
<tr>
<td>Mike&nbsp;</td>
<td>Arizona&nbsp;</td>
<td>15&nbsp;</td>
</tr>
<tr>
<td>Bob&nbsp;</td>
<td>New Jersey&nbsp;</td>
<td>10&nbsp;</td>
</tr>
<tr>
<td>Derreck&nbsp;</td>
<td>Oregon&nbsp;</td>
<td>2&nbsp;</td>
</tr>
</tbody>
</table>
    </>
  )
}

export default Leaderboard