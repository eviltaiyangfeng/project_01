<?php
use frontend\phpDemo;

class Des
{
    private $_key = "";

    public function __construct($key=null) {
        if($key !== null)
            $this->_key = $key;
    }

    public function encrypt($str) {
        $td = $this->gettd();
        $ret = mcrypt_generic($td, $this->pkcs5_pad($str, 8));
        mcrypt_generic_deinit($td);
        mcrypt_module_close($td);
        return $this->strToHex($ret);
    }

    public function decrypt($str) {
        $td = $this->gettd();
        $ret = $this->pkcs5_unpad(mdecrypt_generic($td, $this->hexToStr($str)));
        mcrypt_generic_deinit($td);
        mcrypt_module_close($td);
        return $ret;
    }

    private function pkcs5_pad($text, $blocksize) {
        $pad = $blocksize - (strlen($text) % $blocksize);
        return $text . str_repeat(chr($pad), $pad);
    }

    private function pkcs5_unpad($text) {
        $pad = ord($text{strlen($text) - 1});
        if ($pad > strlen($text)) {
            return false;
        }
        if (strspn($text, chr($pad), strlen($text) - $pad) != $pad) {
            return false;
        }
        return substr($text, 0, -1 * $pad);
    }

    private function getiv() {
        return pack('H16', '0000000000000000');
    }

    private function gettd() {
        $iv = $this->getiv();
        $td = mcrypt_module_open(MCRYPT_3DES, '', MCRYPT_MODE_ECB, '');
        mcrypt_generic_init($td, $this->_key, $iv);
        return $td;
    }

    private function strToHex($string){
        $hex = '';
        for ($i=0; $i<strlen($string); $i++){
            $ord = ord($string[$i]);
            $hexCode = dechex($ord);
            $hex .= substr('0'.$hexCode, -2);
        }
        return strToUpper($hex);
    }
    private function hexToStr($hex){
        $string='';
        for ($i=0; $i < strlen($hex)-1; $i+=2){
            $string .= chr(hexdec($hex[$i].$hex[$i+1]));
        }
        return $string;
    }
}