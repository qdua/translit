$(document).ready(function() {
    function translit(word) {
        var converter = {
            'À': 'A',
            'À': 'A',
            'Á': 'A',
            'Á': 'A',
            'Â': 'A',
            'Â': 'A',
            'Ã': 'A',
            'Ã': 'A',
            'Ä': 'e',
            'Ä': 'A',
            'Å': 'A',
            'Å': 'A',
            'Æ': 'e',
            'Æ': 'E',
            'Ā': 'A',
            'Ą': 'A',
            'Ă': 'A',
            'Ç': 'C',
            'Ç': 'C',
            'Ć': 'C',
            'Č': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Ď': 'D',
            'Đ': 'D',
            'È': 'E',
            'È': 'E',
            'É': 'E',
            'É': 'E',
            'Ê': 'E',
            'Ê': 'E',
            'Ë': 'E',
            'Ë': 'E',
            'Ē': 'E',
            'Ę': 'E',
            'Ě': 'E',
            'Ĕ': 'E',
            'Ė': 'E',
            'Ĝ': 'G',
            'Ğ': 'G',
            'Ġ': 'G',
            'Ģ': 'G',
            'Ĥ': 'H',
            'Ħ': 'H',
            'Ì': 'I',
            'Ì': 'I',
            'Í': 'I',
            'Í': 'I',
            'Î': 'I',
            'Î': 'I',
            'Ï': 'I',
            'Ï': 'I',
            'Ī': 'I',
            'Ĩ': 'I',
            'Ĭ': 'I',
            'Į': 'I',
            'İ': 'I',
            'Ĳ': 'J',
            'Ĵ': 'J',
            'Ķ': 'K',
            'Ľ': 'K',
            'Ĺ': 'K',
            'Ļ': 'K',
            'Ŀ': 'K',
            'Ñ': 'N',
            'Ñ': 'N',
            'Ń': 'N',
            'Ň': 'N',
            'Ņ': 'N',
            'Ŋ': 'N',
            'Ò': 'O',
            'Ò': 'O',
            'Ó': 'O',
            'Ó': 'O',
            'Ô': 'O',
            'Ô': 'O',
            'Õ': 'O',
            'Õ': 'O',
            'Ö': 'e',
            'Ö': 'e',
            'Ø': 'O',
            'Ø': 'O',
            'Ō': 'O',
            'Ő': 'O',
            'Ŏ': 'O',
            'Œ': 'E',
            'Ŕ': 'R',
            'Ř': 'R',
            'Ŗ': 'R',
            'Ś': 'S',
            'Ş': 'S',
            'Ŝ': 'S',
            'Ș': 'S',
            'Ť': 'T',
            'Ţ': 'T',
            'Ŧ': 'T',
            'Ț': 'T',
            'Ù': 'U',
            'Ù': 'U',
            'Ú': 'U',
            'Ú': 'U',
            'Û': 'U',
            'Û': 'U',
            'Ü': 'e',
            'Ū': 'U',
            'Ü': 'e',
            'Ů': 'U',
            'Ű': 'U',
            'Ŭ': 'U',
            'Ũ': 'U',
            'Ų': 'U',
            'Ŵ': 'W',
            'Ŷ': 'Y',
            'Ÿ': 'Y',
            'Ź': 'Z',
            'Ż': 'Z',
            'à': 'a',
            'á': 'a',
            'â': 'a',
            'ã': 'a',
            'ä': 'e',
            'ä': 'e',
            'å': 'a',
            'ā': 'a',
            'ą': 'a',
            'ă': 'a',
            'å': 'a',
            'æ': 'e',
            'ç': 'c',
            'ć': 'c',
            'č': 'c',
            'ĉ': 'c',
            'ċ': 'c',
            'ď': 'd',
            'đ': 'd',
            'è': 'e',
            'é': 'e',
            'ê': 'e',
            'ë': 'e',
            'ē': 'e',
            'ę': 'e',
            'ě': 'e',
            'ĕ': 'e',
            'ė': 'e',
            'ƒ': 'f',
            'ĝ': 'g',
            'ğ': 'g',
            'ġ': 'g',
            'ģ': 'g',
            'ĥ': 'h',
            'ħ': 'h',
            'ì': 'i',
            'í': 'i',
            'î': 'i',
            'ï': 'i',
            'ī': 'i',
            'ĩ': 'i',
            'ĭ': 'i',
            'į': 'i',
            'ı': 'i',
            'ĳ': 'j',
            'ĵ': 'j',
            'ķ': 'k',
            'ĸ': 'k',
            'ł': 'l',
            'ľ': 'l',
            'ĺ': 'l',
            'ļ': 'l',
            'ŀ': 'l',
            'ñ': 'n',
            'ń': 'n',
            'ň': 'n',
            'ņ': 'n',
            'ŉ': 'n',
            'ŋ': 'n',
            'ò': 'o',
            'ó': 'o',
            'ô': 'o',
            'õ': 'o',
            'ö': 'e',
            'ö': 'e',
            'ø': 'o',
            'ō': 'o',
            'ő': 'o',
            'ŏ': 'o',
            'œ': 'e',
            'ŕ': 'r',
            'ř': 'r',
            'ŗ': 'r',
            'ù': 'u',
            'ú': 'u',
            'û': 'u',
            'ü': 'e',
            'ū': 'u',
            'ü': 'e',
            'ů': 'u',
            'ű': 'u',
            'ŭ': 'u',
            'ũ': 'u',
            'ų': 'u',
            'ŵ': 'w',
            'ÿ': 'y',
            'ŷ': 'y',
            'ż': 'z',
            'ź': 'z',
            'ß': 's',
            'ſ': 's',
            'Α': 'A',
            'Ά': 'A',
            'Β': 'B',
            'Γ': 'G',
            'Δ': 'D',
            'Ε': 'E',
            'Έ': 'E',
            'Ζ': 'Z',
            'Η': 'I',
            'Ή': 'I',
            'Θ': 'TH',
            'Ι': 'I',
            'Ί': 'I',
            'Ϊ': 'I',
            'Κ': 'K',
            'Λ': 'L',
            'Μ': 'M',
            'Ν': 'N',
            'Ξ': 'KS',
            'Ο': 'O',
            'Ό': 'O',
            'Π': 'P',
            'Ρ': 'R',
            'Σ': 'S',
            'Τ': 'T',
            'Υ': 'Y',
            'Ύ': 'Y',
            'Ϋ': 'Y',
            'Φ': 'F',
            'Χ': 'X',
            'Ψ': 'PS',
            'Ω': 'O',
            'Ώ': 'O',
            'α': 'a',
            'ά': 'a',
            'β': 'b',
            'γ': 'g',
            'δ': 'd',
            'ε': 'e',
            'έ': 'e',
            'ζ': 'z',
            'η': 'i',
            'ή': 'i',
            'θ': 'th',
            'ι': 'i',
            'ί': 'i',
            'ϊ': 'i',
            'ΐ': 'i',
            'κ': 'k',
            'λ': 'l',
            'μ': 'm',
            'ν': 'n',
            'ξ': 'ks',
            'ο': 'o',
            'ό': 'o',
            'π': 'p',
            'ρ': 'r',
            'σ': 's',
            'τ': 't',
            'υ': 'y',
            'ύ': 'y',
            'ϋ': 'y',
            'ΰ': 'y',
            'φ': 'f',
            'χ': 'x',
            'ψ': 'ps',
            'ω': 'o',
            'ώ': 'o',
            'А': 'a',
            'а': 'a',
            'Б': 'b',
            'б': 'b',
            'В': 'v',
            'в': 'v',
            'Г': 'g',
            'г': 'g',
            'Ґ': 'g',
            'ґ': 'g',
            'Д': 'd',
            'д': 'd',
            'Е': 'e',
            'е': 'e',
            'Ё': 'yo',
            'ё': 'e',
            'Ж': 'zh',
            'ж': 'zh',
            'З': 'z',
            'з': 'z',
            'И': 'i',
            'и': 'i',
            'І': 'i',
            'і': 'i',
            'ї': 'i',
            'Ї': 'i',
            'Й': 'j',
            'й': 'j',
            'К': 'k',
            'к': 'k',
            'Л': 'l',
            'л': 'l',
            'М': 'm',
            'м': 'm',
            'Н': 'n',
            'н': 'n',
            'О': 'o',
            'о': 'o',
            'П': 'p',
            'п': 'p',
            'Р': 'r',
            'р': 'r',
            'С': 's',
            'с': 's',
            'Т': 't',
            'т': 't',
            'У': 'u',
            'у': 'u',
            'Ф': 'f',
            'ф': 'f',
            'Х': 'h',
            'х': 'h',
            'Ц': 'c',
            'ц': 'c',
            'Ч': 'ch',
            'ч': 'ch',
            'Ш': 'sh',
            'ш': 'sh',
            'Щ': 'sch',
            'щ': 'sch',
            'Ъ': '',
            'ъ': '',
            'Ы': 'y',
            'ы': 'i',
            'Ь': '',
            'ь': '',
            'Э': 'e',
            'э': 'e',
            'Є': 'e',
            'є': 'e',
            'Ю': 'yu',
            'ю': 'iu',
            'Я': 'ya',
            'я': 'ia',
            '&': 'and',
            '%': '',
            '\'': '',
            '/': '',
            '.': '',
            ',': '',
            '(': '',
            ')': '',
            '{': '',
            '}': '',
            '«': '',
            '»': '',
            '“': '',
            '”': '',
            '!': '',
            '@': '-a-',
            '#': '',
            '№': '',
            '$': '',
            '^': '',
            '*': '',
            '+': '-',
            '=': '-',
            ';': '',
            '–': '-',
            '~': '-',
            '`': ''
        };

        word = word.toLowerCase();

        var answer = '';
        for (var i = 0; i < word.length; ++i) {
            if (converter[word[i]] == undefined) {
                answer += word[i];
            } else {
                answer += converter[word[i]];
            }
        }

        answer = answer.replace(/[^-0-9a-z]/g, '-');
        answer = answer.replace(/[-]+/g, '-');
        answer = answer.replace(/^\-|-$/g, '');
        return answer;
    }

    $('#start').bind('change keyup input click', function() {
        $('#final').val(translit($('#start').val(), 0));
        $('button').addClass('open');
        $('#copy').addClass('open');
    });

    $('button').click(function() {
        $(this).removeClass('open');
        $('#copy').removeClass('open');
    });

    $("#copy").click(function() {
        var $textarea = $("#final");
        $textarea.select();
        document.execCommand("copy");
        $('#copy').after('<span id="incopy"><br>скопійовано...</span>');
        setInterval(function() {
            $('#incopy').fadeOut();
        }, 2000);
    });

});