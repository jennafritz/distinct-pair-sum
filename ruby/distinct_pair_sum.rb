def distinct_pair_sum(arr, k)
  # type your code in here
  sums = []

  arr.each_with_index do |element, index|
    i = index + 1
    while i < arr.length
      if element + arr[i] == k
        new_sum = [element, arr[i]]
        check = sums.any? do |array|
          (array[0] == new_sum[0] && array[1] == new_sum[1]) || (array[0] == new_sum[1] && array[1] == new_sum[0])
        end
        if !check
          sums << new_sum
        end
      end
      i = i + 1
    end
  end

  sums

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [[1, 1], [2, 0]]"
  print "=> "
  print distinct_pair_sum([0, 1, 1, 2, 0, 1, 1], 2)

  puts "Expecting: []"
  print "=> "
  print distinct_pair_sum([0, 8, 24, 37, 10, 12, 4], 13)

  puts "Expecting: [[2, 8]]"
  print "=> "  
  print distinct_pair_sum([3, 4, 2, 1, 5, 2, 8, 2], 10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
