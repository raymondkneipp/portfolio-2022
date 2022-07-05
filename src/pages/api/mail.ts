export async function get(params, request) {
	console.log(params, request);
	return new Response(JSON.stringify({ ok: true, params, request }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
