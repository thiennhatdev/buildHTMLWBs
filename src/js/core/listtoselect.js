var listtoselect = {
	listSelect : function(){
		function listToSelect() {
			$('[data-select]').each(function () {
				var list = $(this), select = $(document.createElement('select')).insertBefore($(this).hide());
				select.addClass('custom-select').attr('data-select-show', '');
				$('>li a', this).each(function () {
					var option = $(document.createElement('option'))
						.appendTo(select)
						.val(this.href)
						.html($(this).html());
				});
				list.hide().removeAttr('data-select').attr('data-select-changed', '');
				select.on('change', function () {
					var url = $(this).val();
					if (url) {
						window.location = url;
					}
					return false;
				});
			});
		}

		function selectChangeToList() {

				if ($(window).width() > 768) {
					$('[data-select-changed]').each(function () {
						$(this).show().removeAttr('data-select-changed').attr('data-select', '');
					});
					$('[data-select-show]').remove();
				} else {
					listToSelect();
				}
		}

		$(document).ready(function () {

				if ($(window).width() <= 768) {
					listToSelect();
			}
		});

		$(window).resize(function () {
				selectChangeToList();
		});


	}
};

export default listtoselect;