<!doctype html>
<html>
<head>
	<title>SDG Challenge---SDG to Everest SDG Challenge Republic Of Conscience</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <link rel="stylesheet" href="css/sdgChallengeBarchart.css">
</head>
<body bgcolor="">
<!--    <div style="float: left;width: 80%;">-->
        <div id="container"  class="center">
            <canvas id="sdgChallengeChart"></canvas>
        </div>
<!--    </div>-->
<!--    <div style="float: right;width: 10%;padding-right: 5px;"><img src="sdg-right.jpeg"></div>-->

</body>
</html>
<?php
$data = array();
$dataLeft = array();
$dataRight = array();
$dataRightSort = array();
$k=10;
while ( $k<= 150) {
    if($k % 7 ==0) 	$dataLeft[]= $k;
    if($k % 9 ==0)  $dataRight[]= $k;
    $k=$k+1;
}

$halfCount=count($dataLeft)-8;
while ( $halfCount<= count($dataLeft)-1) {
    $data[]=$dataLeft[$halfCount];
    $halfCount++;
}

$halfCount=0;
while ( $halfCount<= 9) {
    $dataRightSort[]=$dataRight[$halfCount];
    $halfCount++;
}
rsort($dataRightSort);
$halfCount=0;
while ( $halfCount<= 9) {
    $data[]=$dataRightSort[$halfCount];
    $halfCount++;
}

$quantity = json_encode($data);
//print_r($data);
?>
<script language="JavaScript">
    var quantity  = <?= $quantity?>
</script>
<script type="text/javascript" src="js/sdgChallengeBarchart.js"></script>