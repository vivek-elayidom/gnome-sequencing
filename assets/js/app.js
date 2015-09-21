$(function () {
    $(".upload-annotate-refine .nav-tabs > li").click(function(){
        if($(this).hasClass("disabled"))
            return false;
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = this.href.split('#');
        $('.nav-tabs a').filter('[href="#'+target[1]+'"]').tab('show');
    });

    $('#refine .upload-first').click(function(event) {
        $('.progress-bar').css({'width': '0%'});
        $('body').addClass('preload');
        setTimeout(function() {
            $('body').removeClass('preload');
        }, 1000);
    });

    $('#upload .btn-primary').click(function(event) {
        $('.progress-bar').css({'width': '33%'});
        $('body').addClass('preload');
        setTimeout(function() {
            $('body').removeClass('preload');
        }, 1000);
    });

    $('#annotate .prev').click(function(event) {
        $('.progress-bar').css({'width': '0'});
        $('body').addClass('preload');
        setTimeout(function() {
            $('body').removeClass('preload');
        }, 1000);
    });

    $('#show-results').hide();

    $('#annotate .next').click(function(event) {
        $('.progress-bar').css({'width': '66%'});
        $('body').addClass('preload');
        setTimeout(function() {
            $('body').removeClass('preload');

            $('#terminal').typist({
              height: 200
            });
            $('#terminal').typist('prompt')
            .typist('wait', 1500)
            .typist('speed', 'fast')
            .typist('type', 'Connecting to server')
            .typist('prompt')
            .typist('wait', 500)
            .typist('type', 'Connection successful....')
            .typist('prompt')
            .typist('wait', 500)
            .typist('type', 'Checking database for data')
            .typist('prompt')
            .typist('wait', 1500)
            .typist('type', '87963258965478 entries found')
            .typist('prompt')
            .typist('wait', 500)
            .typist('type', 'Retriving data from database')
            .typist('prompt')
            .typist('wait', 500)
            .typist('type', 'Downloading....')
            .typist('prompt')
            .typist('wait', 800)
            .typist('type', 'Download completed successfully in 0.3s')
            .typist('prompt')
            .typist('wait', 200)
            .typist('type', 'Rebuilding tables')
            .typist('prompt')
            .typist('wait', 100)
            .typist('type', 'Build successful')
            .typist('prompt')
            .typist('wait', 200)
            .typist('type', 'Sorting tables')
            .typist('prompt')
            .typist('wait', 200)
            .typist('type', 'Updating data')

        }, 1000);

        setTimeout(function() {
            $('#show-results').show();
        }, 16000);
    });

    $('#show-results').click(function() {
        $('.progress-bar').css({'width': '100%'});
        $('body').addClass('preload');
        setTimeout(function() {
            $('body').removeClass('preload');

            $('.console').hide();
            $('.results').show();

            $('.filters').hide();
            setTimeout(function() {
                $('.table-responsive').css({'min-height': 'auto'});
                $('.table-responsive').doubleScroll();
            }, 100);
        }, 1000);
    });

    $('#active-filters').hide();

    $('#refine-data').click(function() {
        $('.filters').show();
        $('#active-filters').show();
    });

    $('#active-filters .list-inline').hide();
    
// Filter1 Start
    $('#add-another').bind('click', function() {

        $('#active-filters .list-inline.filter-group1').show();

        var filter11 = $('#filter11'),
            filter12 = $('#filter12'),
            filter13 = $('#filter13'),
            f11Sel = filter11.find(':selected'),
            f12Sel = filter12.find(':selected'),
            f13Sel = filter13.find(':selected');
        if (f11Sel.val()!='' && f12Sel.val()!='' && f13Sel.val()!='') {
            $('.added-filter1').show();
            $('.added-filter1 .list-inline').prepend('<li>'+f11Sel.text() +'&nbsp;'+ f12Sel.text() +'&nbsp;'+ f13Sel.text()+'<span class="badge"><i class="fa fa-close"></i></span></li>');

            var filter1Data = $('.added-filter1 .list-inline').html();
            $('#active-filters .list-inline.filter-group1').html(filter1Data);

            filter11.val('');
            filter12.val('');
            filter13.val('');
            $('.selectpicker').selectpicker('refresh');

            function removeFilter1() {
                $('.added-filter1 .list-inline span').bind('click', function() {
                    $(this).parent('li').remove();
                    var filter1Data = $('.added-filter1 .list-inline').html();
                    $('#active-filters .list-inline.filter-group1').html(filter1Data);

                    filter11.val('');
                    filter12.val('');
                    filter13.val('');
                    $('.selectpicker').selectpicker('refresh');
                    removeFilter2();
                });
            }

            function removeFilter2() {
                $('#active-filters .list-inline.filter-group1 span').bind('click', function() {
                    $(this).parent('li').remove();
                    var filter1Data = $('#active-filters .list-inline.filter-group1').html();
                    $('.added-filter1 .list-inline').html(filter1Data);

                    $('#filter11').val('');
                    $('#filter12').val('');
                    $('#filter13').val('');
                    $('.selectpicker').selectpicker('refresh');
                    removeFilter1();
                });
            }

            removeFilter1();
            removeFilter2();


        } else {
            alert("Please select all the required fields");
        }
    });
// Filter1 End
    
    $('#clear-filters').bind('click', function() {
        $('#filter11, #filter12, #filter13, #chr-count, #chr-operator-start, #chr-start-count, #chr-operator-end, #chr-end-count, #gene').val('');
        $('#func input[type="checkbox"]').removeAttr('checked');
        $('#exonic-func input[type="checkbox"]').removeAttr('checked');
        
        $('.added-filter1 .list-inline li').html('');
        $('#active-filters .list-inline.filter-group1').html('').hide();
        $('#active-filters .list-inline.filter-group2 li').html('').hide();
        $('#active-filters .list-inline.filter-group2').hide();
        $('#active-filters .list-inline.filter-group3').html('').hide();
        $('#active-filters .list-inline.filter-group4').html('').hide();

        $('.selectpicker').selectpicker('refresh');

        $('.filters, #active-filters').hide();

    });

//Filter2 Start

    $('#active-filters .list-inline.filter-group2 li').hide();

    $('#chr-count').on('input', function() {

        if ($(this).val()!='') {
            $('#active-filters .list-inline.filter-group2').show();
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(1)').show();

            var chrCount = $(this).val();
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(1)').html('CHR: '+chrCount+'<span class="badge"><i class="fa fa-close"></i></span>');
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(1) span').bind('click', function() {
                $(this).parent().html('');
                $('#chr-count').val('');
                $('#active-filters .list-inline.filter-group2 li:nth-of-type(1)').hide();
            });
        } else {
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(1)').html('');
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(1)').hide();
        }

    });

    $('#chr-start-count').on('input', function() {

        if ($(this).val()!='') {
            $('#active-filters .list-inline.filter-group2').show();
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(2)').show();

            var startCount = $(this).val(),
            chrStartVal = $('#chr-operator-start').find(':selected').text();

            if ($('#chr-operator-start').val()!=''){
                $('#active-filters .list-inline.filter-group2 li:nth-of-type(2)').html('Start '+ chrStartVal +'&nbsp;'+ startCount+'<span class="badge"><i class="fa fa-close"></i></span>');
                $('#active-filters .list-inline.filter-group2 li:nth-of-type(2) span').bind('click', function() {
                    $(this).parent().html('');
                    $('#chr-start-count').val('');
                    $('#chr-operator-start').val('');
                    $('.selectpicker').selectpicker('refresh');
                    $('#active-filters .list-inline.filter-group2 li:nth-of-type(2)').hide();
                });
            } else {
                alert("Please Select Operator")
            }
        } else {
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(2)').html('');
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(2)').hide();
        }
    });

    $('#chr-end-count').on('input', function() {

        if ($(this).val()!='') {
            $('#active-filters .list-inline.filter-group2').show();
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(3)').show();

            var endCount = $(this).val(),
            chrEndVal = $('#chr-operator-end').find(':selected').text();

            if ($('#chr-operator-end').val()!=''){
                $('#active-filters .list-inline.filter-group2 li:nth-of-type(3)').html('End '+ chrEndVal +'&nbsp;'+ endCount+'<span class="badge"><i class="fa fa-close"></i></span>');
                $('#active-filters .list-inline.filter-group2 li:nth-of-type(3) span').bind('click', function() {
                    $(this).parent().html('');
                    $('#chr-end-count').val('');
                    $('#chr-operator-end').val('');
                    $('.selectpicker').selectpicker('refresh');
                    $('#active-filters .list-inline.filter-group2 li:nth-of-type(3)').hide();
                });
            } else {
                alert("Please Select Operator")
            }
        } else {
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(3)').html('');
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(3)').hide();
        }

    });

    $('#gene').on('input', function() {

        if ($(this).val()!='') {
            $('#active-filters .list-inline.filter-group2').show();
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(4)').show();

            var gene = $(this).val();
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(4)').html('Gene: '+gene+'<span class="badge"><i class="fa fa-close"></i></span>');
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(4) span').bind('click', function() {
                $(this).parent().html('');
                $('#gene').val('');
                $('#active-filters .list-inline.filter-group2 li:nth-of-type(4)').hide();
            });
        } else {
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(4)').html('');
            $('#active-filters .list-inline.filter-group2 li:nth-of-type(4)').hide();
        }

    });

//Filter2 End

// Filter3 Starts
    
    
    $('#func .checkbox input').bind('click', function() {
        var selectedCheckbox = $(this).val();
        if($(this).is(':checked')){
            $('#active-filters .list-inline.filter-group3').show();
            $('#active-filters .list-inline.filter-group3').append('<li data-select="'+selectedCheckbox+'">'+selectedCheckbox+'<span class="badge"><i class="fa fa-close"></i></span></li>');
        } else {
            $('#active-filters .list-inline.filter-group3 li[data-select="'+selectedCheckbox+'"]').remove();
        }
        $('#active-filters .list-inline.filter-group3 li span').bind('click', function() {
            var checkValue = $(this).parent('li').attr('data-select');
            $('#func .checkbox input[value="'+checkValue+'"]').removeAttr('checked');
            $(this).parent('li').remove();
        });
    });

    $('#exonic-func .checkbox input').bind('click', function() {
        var selectedCheckbox = $(this).val();
        if($(this).is(':checked')){
            $('#active-filters .list-inline.filter-group4').show();
            $('#active-filters .list-inline.filter-group4').append('<li data-select="'+selectedCheckbox+'">'+selectedCheckbox+'<span class="badge"><i class="fa fa-close"></i></span></li>');
        } else {
            $('#active-filters .list-inline.filter-group4 li[data-select="'+selectedCheckbox+'"]').remove();
        }
        $('#active-filters .list-inline.filter-group4 li span').bind('click', function() {
            var checkValue = $(this).parent('li').attr('data-select');
            $('#exonic-func .checkbox input[value="'+checkValue+'"]').removeAttr('checked');
            $(this).parent('li').remove();
        });
    });

// Filter3 End

    $('#filter-results').bind('click', function() {
        $('.filters').hide();
    });

    // $(".select").dropdown({ "autoinit" : ".select" });
    $('.selectpicker').selectpicker();

});