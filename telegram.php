<?
// https"//api.telegram.org:'2082977303:AAEmz1rwxq68lhTJpHuxGjTpKp6tiW8QN5Q':getupdates

  $name = $_POST['ucer_name'];
  $number = $_POST['ucer_number'];
  $email = $_POST['ucer_email'];
  $texting = $_POST['ucer_texting'];
  $token = '2082977303:AAEmz1rwxq68lhTJpHuxGjTpKp6tiW8QN5Q';
  $chat_id = '-723961830';
  
  
  $arr = array(
      'Ism: ' => $name,
      'Telefon: ' => $number,
      'Email: ' => $email ,
      'Etirozlar: ' => $texting, 
     
  );
  foreach ($arr as $key => $value):
  $text .= $key . $value . "%0A";
  endforeach;
  
  $telegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&
  parse_emode=html&text={$text}", "o");
  
  if($telegram){
      header('location: index.html');
  }
  else {
      echo 'ERROR';
  }
?>