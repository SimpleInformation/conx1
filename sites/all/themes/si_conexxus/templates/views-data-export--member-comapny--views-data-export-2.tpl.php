<?php

 $arg1 = arg(1); 
 $datas = views_get_view_result('member_comapny', 'page', array($arg1));
$tbody = '';
if(isset($datas[0])){

	foreach($datas as $keys => $vals) {
		$tbody .= '<tr>';
		$body_sub = '';
		$body_sub .= '<td>'.$vals->_field_data['uid']['entity']->realname.'</td><td>';
		if(isset($vals->field_og_user_node)) {
			foreach($vals->field_og_user_node as $key => $val) {
				$body_sub .= $val['raw']['entity']->title. ',';
			}
		}
		$body_sub .= '</td>';
		$tbody .= $body_sub;
		$tbody .= '</tr>';
	}

}

?>

<?php  //print $header ?>
<?php //print $body ?>
<?php //print $footer ?>


<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>
    <table>
    <?php print $header_row; ?>
    <tbody>
<?php print $tbody; ?>
      </tbody>
    </table>
  </body>
</html>
