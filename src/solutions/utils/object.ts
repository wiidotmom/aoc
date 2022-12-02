export function incrementMap<K>(
	map: Map<K, number>,
	key: K,
	amount: number = 1
) {
	if (!map.has(key)) map.set(key, 0);
	map.set(key, map.get(key)! + amount);
}
