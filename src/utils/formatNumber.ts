import BigNumber from 'bignumber.js';

export const formatUnits = (n: BigNumber, s: number): BigNumber => {
	return new BigNumber(n).div(10 ** s);
};

export const plus = (a: string, b: string): BigNumber => {
	return new BigNumber(a).plus(new BigNumber(b));
};

export const maxNumberAfterDot = (s: string, n: number) => {
	if (s === '0') return '0';
	const lastDotPosition = s.lastIndexOf('.');
	if (lastDotPosition === -1) {
		return s;
	}

	const decimalPart = s.substring(lastDotPosition + 1);
	const roundedPart = s.substring(0, lastDotPosition);

	if (n > 0) {
		return roundedPart + '.' + decimalPart.substring(0, n);
	}
	return roundedPart;
};

export function addCommas(nStr) {
	nStr += '';
	const x = nStr.split('.');
	let x1 = x[0];
	const x2 = x.length > 1 ? '.' + x[1] : '';
	const rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1,$2');
	}
	return x1 + x2;
}
