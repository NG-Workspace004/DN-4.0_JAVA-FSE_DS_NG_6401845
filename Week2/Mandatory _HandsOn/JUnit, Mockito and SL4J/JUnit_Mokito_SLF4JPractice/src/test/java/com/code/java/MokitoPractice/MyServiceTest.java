package com.code.java.MokitoPractice;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create a mock of ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub the getData() method to return a fake value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into MyService
        MyService service = new MyService(mockApi);

        // Step 4: Call the method under test
        String result = service.fetchData();

        // Step 5: Assert the result
        assertEquals("Mock Data", result);
        
        System.out.println("The Mocked Data : "+result);
    }
}
