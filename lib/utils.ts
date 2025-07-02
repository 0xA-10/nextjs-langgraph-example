import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Turn an AsyncIterable<T> into a ReadableStream<U>,
 * emitting only those items where `filter(item)` is true,
 * mapped through `mapper(item)`.
 */
export function toReadableStream<T, U>(
	iterable: AsyncIterable<T>,
	options?: {
		filter?: (item: T) => boolean;
		mapper?: (item: T) => U;
	},
): ReadableStream<U> {
	return new ReadableStream<U>({
		async start(controller) {
			try {
				for await (const item of iterable) {
					// Optionally apply filtering
					if (options?.filter && !options.filter(item)) {
						continue;
					}

					// Optionally apply mapping
					const value = options?.mapper ? options.mapper(item) : (item as U);

					controller.enqueue(value);
				}
			} finally {
				controller.close();
			}
		},
	});
}
