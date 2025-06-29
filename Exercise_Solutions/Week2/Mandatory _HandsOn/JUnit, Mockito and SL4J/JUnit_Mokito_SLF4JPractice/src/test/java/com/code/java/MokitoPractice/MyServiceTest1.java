package com.code.java.MokitoPractice;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest1 {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject mock into MyService
        MyService service = new MyService(mockApi);

        // Step 3: Call method under test
        service.fetchData();

        // Step 4: Verify that getData() was called exactly once
        verify(mockApi).getData();
    }
}

