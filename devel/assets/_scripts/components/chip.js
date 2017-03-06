var Chip = {
	$input: $('.chips__input'),
	$chip: $('.chip'),
	$wrapper: $('.chips__wrapper'),
	$container: $('.chips__container'),
	$inputWrapper: $('.chips__input-wrapper'),
	currentCount: 0,
	$remover: $('.chip__close'),

	addChip: function (input) {
		var chipVal = input.val();
		if (chipVal.length > 0) {
			Chip.currentCount++;

			var newChip = '<div class="chip" id="chip-'+ Chip.currentCount +'">' + '<p class="chip__content">'+ chipVal + '</p>' +
				'<div class="chip__close" onclick="Chip.removeChip($(this))"><i class="fa fa-remove"></i></div></div>';
			// Chip.$container.append(newChip);
			$(newChip).insertBefore(Chip.$inputWrapper);
			input.val('');
		}
	},

	removeChip: function (elem) {
		elem.parent().remove();
		Chip.currentCount--;
	},

	init: function () {
		console.log(Chip);
		Chip.$input.on('keypress', function (e) {
			var $this = $(this);
			if(e.which === 13) {
				Chip.addChip($this);
			}
		});

		Chip.$remover.on('click', function () {
			$(this).parent().remove();
		});
	}
};