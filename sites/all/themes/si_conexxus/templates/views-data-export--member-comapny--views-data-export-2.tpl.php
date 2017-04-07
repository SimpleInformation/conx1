<?php

 $arg1 = arg(1); 
  try{
    $dts = node_load($arg1);
    $titl  = '<tr><td COLSPAN=2> </td></tr>';
		$titl .= '<tr><td COLSPAN=2> <b>Company : </b>'.$dts->title.'</td></tr>';
    $titl .= '<tr><td> </td><td></td></tr>';
  }
  catch(Exception $e) {
   
  }

 $datas = views_get_view_result('member_comapny', 'page', array($arg1));
$tbody = '';
if(isset($datas[0])){

	foreach($datas as $keys => $vals) {
		$tbody .= '<tr>';
		$body_sub = '';
		$body_sub .= '<td>'.$vals->_field_data['uid']['entity']->realname.'</td><td>';
		if(isset($vals->field_og_user_node)) {
			$datasa = array();
			foreach($vals->field_og_user_node as $key => $val) {
				if($val['raw']['entity']->title) {
				  $datasa[]= $val['raw']['entity']->title;
        }
			}
      asort($datasa);
			foreach($datasa as $key => $val) {
				$body_sub .= $val. ',';
			}
		}
		$body_sub .= '</td>';
		$tbody .= $body_sub;
		$tbody .= '</tr>';
	}
  //$tbody .= $titl;
}
$header_row =		'<tr><th > <b>Team Member: </b></th><td><b> Groups joined by this team member: </b></td></tr>';
?>

<?php  //print $header ?>
<?php //print $body ?>
<?php //print $footer ?>


<html>
  <head>
    <meta http-equiv="Content-Type" content="application/x-msexcel; charset=utf-8" />
  </head>
  <body>
    <table>
    <tbody>
 <?php print $titl; ?>
    </tbody>

    </table>
    <table>
    <?php print $header_row; ?>
    <tbody>
<?php print $tbody; ?>

      </tbody>

    </table>
  </body>
</html>
